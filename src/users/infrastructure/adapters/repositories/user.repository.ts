import BaseReponse from "@/shared/domain/types/base-response";
import { axiosClient } from "@/shared/infrastructure/axios/basic-axios";
import IUserRepository from "@/users/application/ports/repositories/user.repository.interface";
import User from "@/users/domain/types/user";

class UserRepository implements IUserRepository {
  async createUser(user: User): Promise<BaseReponse<User>> {
    const response = await axiosClient.post("/users", {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password,
      cellphone: user.cellphone,
    });

    const baseResponse: BaseReponse<User> = response.data;

    return baseResponse;
  }
}

export default UserRepository;
