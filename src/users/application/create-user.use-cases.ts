import User from "../domain/types/user";
import IUserRepository from "./ports/repositories/user.repository.interface";

class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(user: User): Promise<User> {
    const response = await this.userRepository.createUser(user);
    console.log(response);

    if (response.success) {
      return response.data;
    }

    throw new Error(response.message);
  }
}

export default CreateUserUseCase;
