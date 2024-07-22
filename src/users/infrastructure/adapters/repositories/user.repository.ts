import BaseResponse from "@/shared/domain/types/base-response";
import { authClient } from "@/shared/infrastructure/axios/auth-axios";
import { axiosClient } from "@/shared/infrastructure/axios/basic-axios";
import IUserRepository from "@/users/application/ports/repositories/user.repository.interface";
import User from "@/users/domain/types/user";

class UserRepository implements IUserRepository {
  async createUser(user: User): Promise<BaseResponse<User>> {
    const response = await axiosClient.post("/users", {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      cellphone: user.cellphone,
    });

    const baseResponse = response.data;

    return baseResponse;
  }

  async getUserByUuid(uuid: string): Promise<BaseResponse<User>> {
    const response = await authClient.get(`/users/${uuid}`);

    const baseResponse = response.data;

    return baseResponse;
  }

  async update(
    uuid: string,
    firstName: string,
    lastName: string,
    cellphone: string,
  ): Promise<BaseResponse<User>> {
    const response = await authClient.put(`/users/${uuid}`, {
      first_name: firstName,
      last_name: lastName,
      cellphone,
    });

    const baseResponse = response.data;

    return baseResponse;
  }
}

export default UserRepository;
