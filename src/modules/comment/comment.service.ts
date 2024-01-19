import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Message } from 'src/common/const/message.const';
import { ResponseData } from 'src/common/util/response.utils';
import { UserService } from '../user/user.service';
import { CommentDto } from './dto/comment.dto';
import { Role } from '../auth/dto/auth.dto';

@Injectable()
export class CommentService {
  constructor(private readonly userService: UserService) {}
  private prisma = new PrismaClient();

  async getCommentList() {
    const commentList = await this.prisma.binh_luan.findMany({});
    return ResponseData(
      HttpStatus.OK,
      Message.COMMENT.LIST_ALL_SUCCESS,
      commentList,
    );
  }

  async getCommentListByRoom(ma_phong: number) {
    const isRoomValid = await this.prisma.phong.findUnique({
      where: { id: ma_phong },
    });
    if (!isRoomValid)
      throw new HttpException(Message.ROOM.NOT_FOUND, HttpStatus.NOT_FOUND);
    const commentListByRoom = await this.prisma.binh_luan.findMany({
      where: { ma_phong },
    });
    return ResponseData(
      HttpStatus.OK,
      Message.COMMENT.GET_SUCCESS,
      commentListByRoom,
    );
  }

  async postNewComment(dto: CommentDto, email: string) {
    const user = await this.userService.verifyUser(email);
    const ngay_binh_luan = new Date();

    const isRoomValid = await this.prisma.phong.findUnique({
      where: { id: dto.ma_phong },
    });

    if (!isRoomValid)
      throw new HttpException(Message.ROOM.NOT_FOUND, HttpStatus.NOT_FOUND);

    await this.prisma.binh_luan.create({
      data: { ...dto, ma_nguoi_binh_luan: user.id, ngay_binh_luan },
    });

    return ResponseData(HttpStatus.OK, Message.COMMENT.POST_SUCCESS, '');
  }

  async updateComment(id: number, dto: CommentDto, email: string) {
    const user = await this.userService.verifyUser(email);
    const userRole = user.role;
    const { USER } = Role;
    const oldComment = await this.prisma.binh_luan.findUnique({
      where: { id },
    });
    if (!oldComment)
      throw new HttpException(Message.COMMENT.NOT_FOUND, HttpStatus.NOT_FOUND);

    if (userRole === USER && user.id !== oldComment.ma_nguoi_binh_luan)
      throw new HttpException(
        Message.COMMENT.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );

    await this.prisma.binh_luan.update({
      where: { id },
      data: dto,
    });
    return ResponseData(HttpStatus.OK, Message.COMMENT.UPDATED_SUCCESS, '');
  }

  async deleteComment(id: number, email: string) {
    const checkUser = await this.userService.verifyUser(email);
    const checkUserRole = checkUser.role;
    const { USER } = Role;

    const comment = await this.prisma.binh_luan.findUnique({
      where: { id },
    });
    if (!comment)
      throw new HttpException(Message.COMMENT.NOT_FOUND, HttpStatus.NOT_FOUND);

    if (checkUserRole === USER && checkUser.id !== comment.ma_nguoi_binh_luan)
      throw new HttpException(
        Message.COMMENT.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );

    await this.prisma.binh_luan.delete({
      where: { id },
    });
    return ResponseData(HttpStatus.OK, Message.COMMENT.DELETED_SUCCESS, '');
  }
}
