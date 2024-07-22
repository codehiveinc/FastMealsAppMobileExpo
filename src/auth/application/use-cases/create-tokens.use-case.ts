import Tokens from "@/auth/domain/types/tokens";
import IAuthRepository from "../ports/repositories/auth.repository";
import HttpRequestError from "@/shared/application/errors/http-request.error";

class CreateTokenUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(email: string, password: string): Promise<Tokens> {
    const response = await this.authRepository.login(email, password);

    if (response.success) {
      return response.data;
    }

    throw new HttpRequestError(response.message);
  }
}

export default CreateTokenUseCase;
