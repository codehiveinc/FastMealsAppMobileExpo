import User from "@/users/domain/types/user";
import IUserRepository from "../ports/repositories/user.repository.interface";
import BaseResponse from "@/shared/domain/types/base-response";

class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    uuid: string,
    firstName: string,
    lastName: string,
    cellphone: string,
  ): Promise<BaseResponse<User>> {
    const response = await this.userRepository.update(
      uuid,
      firstName,
      lastName,
      cellphone,
    );

    if (response.success) {
      return response;
    }

    throw new Error(response.message);
  }
}

export default UpdateUserUseCase;
