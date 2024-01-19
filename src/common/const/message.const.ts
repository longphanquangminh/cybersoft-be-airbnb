export const Message = {
  LOGIN: {
    SUCCESS: 'Đăng nhập thành công',
    FAIL: 'Đăng nhập thất bại',
    PW_FAIL: 'Mật khẩu không đúng',
    EMAIL_FAIL: 'Email không đúng',
  },
  REGISTER: {
    SUCCESS: 'Đăng ký thành công',
    FAIL: 'Đăng ký',
    EMAIL_FAIL: 'Email đã tồn tại',
  },
  COMMENT: {
    LIST_ALL_SUCCESS: 'Lấy thành công danh sách tất cả bình luận!',
    GET_SUCCESS: 'Lấy thành công nội dung bình luận!',
    POST_SUCCESS: 'Thêm bình luận thành công!',
    UPDATED_SUCCESS: 'Cập nhật bình luận thành công!',
    DELETED_SUCCESS: 'Xóa bình luận thành công!',
    FAIL: 'Đã có lỗi xảy ra, vui lòng thử lại: ',
    UNAUTHORIZED: 'Không đủ quyền hạn để thực hiện tác vụ này',
    NOT_FOUND: 'Nội dung bình luận không tồn tại hoặc đã bị xóa!',
  },
  BOOKING: {
    LIST_ALL_SUCCESS: 'Lấy thành công danh sách tất cả lịch đặt phòng!',
    GET_SUCCESS: 'Lấy thành công nội dung lịch đặt phòng!',
    GET_BY_USER_SUCCESS:
      'Lấy thành công nội dung lịch đặt phòng theo người dùng!',
    POST_SUCCESS: 'Thêm lịch đặt phòng thành công!',
    DOUBLE_BOOKED: 'Lịch đặt phòng bị trùng!',
    UPDATED_SUCCESS: 'Cập nhật lịch đặt phòng thành công!',
    DELETED_SUCCESS: 'Xóa lịch đặt phòng thành công!',
    FAIL: 'Đã có lỗi xảy ra, vui lòng thử lại: ',
    NOT_FOUND: 'Nội dung lịch đặt phòng không tồn tại hoặc đã bị xóa!',
    UNAUTHORIZED: 'Không đủ quyền hạn để thực hiện tác vụ này',
  },
  IMAGE: {
    LIST_ALL: 'Danh sách tất cả hình ảnh',
    LIST_SEARCH: 'Danh sách tìm kiếm hình ảnh',
    LIST_UPLOAD: 'Danh sách hình ảnh người dùng đã đăng',
    LIST_SAVE: 'Danh sách hình đã lưu',
    DETAIL: 'Chi tiết hình ảnh',
    SAVED: 'Đã lưu',
    UNSAVED: 'Bỏ lưu',
    NOTSAVED: 'Chưa lưu',
    DELETE_FAIL_INVALID: 'Xóa thất bại, không tìm thấy hình',
    DELETE_SUCESS: 'Xóa thành công',
    UPLOAD_SUCCESS: 'Đăng hình thành công',
    NOT_FOUND: 'Không tìm thấy hình ảnh',
  },
  USER: {
    SUCCESS: 'Lấy thông tin người dùng thành công',
    NOT_FOUND: 'Không tìm thấy người dùng',
    UPDATE_INFO_SUCCESS: 'Cập nhật thông tin tài khoản thành công',
    UPDATE_INFO_FAIL_UNAUTHORIZED:
      'Cập nhật thất bại, không đủ quyền hạn để thực hiện tác vụ này',
    UPDATE_PASSWORD_SUCCESS: 'Thay đổi mật khẩu thành công',
    UPDATE_PASSWORD_FAIL_INCORRECT: 'Thay đổi mật khẩu thất bại',
    UPDATE_AVATAR_SUCCESS: 'Thay đổi ảnh đại diện thành công',
    UNAUTHORIZED: 'Không đủ quyền hạn để thực hiện tác vụ này',
    DELETE_SUCCESS: 'Xóa tài khoản thành công',
    FAIL_PAGEINDEX: 'PageIndex vượt quá số trang có thể có',
  },
  LOCATION: {
    SUCCESS: 'Lấy thông tin vị trí thành công',
    SUCCESS_PAGINATION: 'Lấy thông tin vị trí theo phân trang thành công',
    SUCCESS_ID: 'Lấy thông tin vị trí theo ID thành công',
    NOT_FOUND: 'Không tìm thấy vị trí',
    CREATE_SUCCESS: 'Tạo vị trí thành công',
    UPDATE_SUCCESS: 'Cập nhật thông tin vị trí thành công',
    DELETE_SUCESS: 'Xóa vị trí thành công',
    DELETE_FAIL: 'Có phòng đã sử dụng vị trí này nên không thể xóa',
  },
  ROOM: {
    SUCCESS: 'Lấy thông tin phòng thành công',
    SUCCESS_FIND_BY_ROOM_ID: 'Lấy thông tin phòng theo ID vị trí thành công',
    SUCCESS_PAGINATION: 'Lấy thông tin phòng theo phân trang thành công',
    SUCCESS_ID: 'Lấy thông tin phòng theo ID thành công',
    NOT_FOUND: 'Không tìm thấy phòng',
    CREATE_SUCCESS: 'Tạo phòng thành công',
    UPDATE_SUCCESS: 'Cập nhật thông tin phòng thành công',
    DELETE_SUCESS: 'Xóa phòng thành công',
    DELETE_FAIL: 'Phòng đã được đặt, không thể xóa',
  },
  REQUEST: {
    ID_ERROR: 'ID không hợp lệ',
  },
  TOKEN: {
    SUCCESS_REFRESH: 'Làm mới token thành công',
    FAIL: 'Token không hợp lệ',
    FAIL_KEY: 'Khóa không đúng',
    FAIL_EXPIRED: 'Token hết hạn',
    FAIL_MISSING: 'Không có token',
  },
};
