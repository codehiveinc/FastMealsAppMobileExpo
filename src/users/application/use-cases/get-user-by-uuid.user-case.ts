import User from "@/users/domain/types/user";
import IUserRepository from "../ports/repositories/user.repository.interface";

class GetUserByUuidUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(uuid: string): Promise<User> {
    const response = await this.userRepository.getUserByUuid(uuid);

    if (response.success) {
      return response.data;
    }

    throw new Error(response.message);
  }
}

export default GetUserByUuidUseCase;
