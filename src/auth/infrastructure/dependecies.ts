import IAuthRepository from "../application/ports/repositories/auth.repository";
import CreateTokenUseCase from "../application/use-cases/create-tokens.use-case";
import AuthRepository from "./adapters/repositories/auth.repository";

const authRepository: IAuthRepository = new AuthRepository();

const createTokensUseCase = new CreateTokenUseCase(authRepository);

export { createTokensUseCase };
