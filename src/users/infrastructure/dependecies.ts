import CreateUserUseCase from "../application/create-user.use-cases";
import IUserRepository from "../application/ports/repositories/user.repository.interface";
import UserRepository from "./adapters/repositories/user.repository";

const userRepository: IUserRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

export { createUserUseCase };
