import User from "@/users/domain/types/user";
import IUserRepository from "../ports/repositories/user.repository.interface";
import HttpRequestError from "@/shared/application/errors/http-request.error";

class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(user: User): Promise<User> {
    const response = await this.userRepository.createUser(user);
    console.log(response);

    if (response.success) {
      return response.data;
    }

    throw new HttpRequestError(response.message);
  }
}

export default CreateUserUseCase;
