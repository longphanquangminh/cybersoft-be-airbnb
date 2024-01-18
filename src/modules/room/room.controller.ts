import {
  Controller,
  Body,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UseFilters,
  HttpStatus,
  ParseFilePipe,
  FileTypeValidator,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import {
  CustomValidationPipe,
  CustomParseIntPipe,
} from 'src/pipes/validation.pipe';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HttpExceptionFilter } from 'src/filters/http-exception.fitler';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { UploadRoomImageDto } from './dto/upload-room-image.dto';
import { AdminJwtGuard } from 'src/decorators/jwt-guard.decorator';

@ApiTags('Room')
@Controller('/api/rooms')
@UseFilters(HttpExceptionFilter)
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('')
  getAllRooms() {
    return this.roomService.getAllRooms();
  }

  @AdminJwtGuard
  @Post('')
  createRoom(@Body(CustomValidationPipe) createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto);
  }

  @Get('get-room-by-location-id')
  getRoomByLocationId(
    @Query('locationId', new CustomParseIntPipe())
    locationId: string,
  ) {
    return this.roomService.getRoomByLocationId(+locationId);
  }

  @Get('pagination-search')
  getAllRoomsPagination(
    @Query(
      'pageIndex',
      new ParseIntPipe({
        exceptionFactory: () => {
          throw new HttpException(
            'Input không hợp lệ. Vui lòng kiểm tra pageIndex và pageSize!',
            HttpStatus.BAD_REQUEST,
          );
        },
      }),
    )
    pageIndex: string,
    @Query(
      'pageSize',
      new ParseIntPipe({
        exceptionFactory: () => {
          throw new HttpException(
            'Input không hợp lệ. Vui lòng kiểm tra pageIndex và pageSize!',
            HttpStatus.BAD_REQUEST,
          );
        },
      }),
    )
    pageSize: string,
    @Query('keyword') keyword: string,
  ) {
    return this.roomService.getAllRoomsPagination(
      +pageIndex,
      +pageSize,
      keyword,
    );
  }

  @Get(':id')
  getRoomById(
    @Param('id', new CustomParseIntPipe())
    id: number,
  ) {
    return this.roomService.getRoomById(id);
  }

  @AdminJwtGuard
  @Put(':id')
  updateRoomById(
    @Body(CustomValidationPipe) updateRoomDto: UpdateRoomDto,
    @Param('id', new CustomParseIntPipe())
    id: number,
  ) {
    return this.roomService.updateRoomById(id, updateRoomDto);
  }

  @AdminJwtGuard
  @Delete(':id')
  deleteRoomById(
    @Param('id', new CustomParseIntPipe())
    id: number,
  ) {
    return this.roomService.deleteRoomById(id);
  }

  @AdminJwtGuard
  @Post('/upload-image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (_, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname),
      }),
      limits: {
        files: 1,
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadRoomImageDto,
  })
  uploadRoomImage(
    @Query('roomId', new CustomParseIntPipe())
    roomId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: '.(png|jpeg|jpg|gif|bmp|tiff|webp|svg)',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.roomService.uploadRoomImage(+roomId, file);
  }
}
