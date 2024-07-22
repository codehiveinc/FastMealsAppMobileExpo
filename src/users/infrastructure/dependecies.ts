import IUserRepository from "../application/ports/repositories/user.repository.interface";
import CreateUserUseCase from "../application/use-cases/create-user.use-case";
import GetUserByUuidUseCase from "../application/use-cases/get-user-by-uuid.user-case";
import UserRepository from "./adapters/repositories/user.repository";

const userRepository: IUserRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);
const getUserByUuidUseCase = new GetUserByUuidUseCase(userRepository);

export { createUserUseCase, getUserByUuidUseCase };
