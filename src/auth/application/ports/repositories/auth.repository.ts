import Tokens from "@/auth/domain/types/tokens";
import BaseResponse from "@/shared/domain/types/base-response";

interface IAuthRepository {
  login: (email: string, password: string) => Promise<BaseResponse<Tokens>>;
}

export default IAuthRepository;
