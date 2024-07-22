import BaseResponse from "@/shared/domain/types/base-response";
import User from "@/users/domain/types/user";

interface IUserRepository {
  createUser: (user: User) => Promise<BaseResponse<User>>;
  getUserByUuid: (uuid: string) => Promise<BaseResponse<User>>;
  update(
    uuid: string,
    firstName: string,
    lastName: string,
    cellphone: string,
  ): Promise<BaseResponse<User>>;
}

export default IUserRepository;
