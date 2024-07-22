import { axiosClient } from "@/shared/infrastructure/axios/basic-axios";
import Tokens from "@/auth/domain/types/tokens";
import BaseResponse from "@/shared/domain/types/base-response";
import IAuthRepository from "@/auth/application/ports/repositories/auth.repository";

class AuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<BaseResponse<Tokens>> {
    try {
      const response = await axiosClient.post("/auth/tokens", {
        email,
        password,
      });

      const baseResponse: BaseResponse<Tokens> = response.data;

      return baseResponse;
    } catch (error) {
      const baseResponse: BaseResponse<Tokens> = error.response.data;

      return baseResponse;
    }
  }
}

export default AuthRepository;
