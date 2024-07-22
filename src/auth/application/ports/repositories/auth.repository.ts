import BaseReponse from "@/shared/domain/types/base-response";
import User from "@/users/domain/types/user";

type IAuthRepository = {
  login: (email: string, password: string) => Promise<BaseReponse>;
  register: (user: User) => Promise<BaseReponse>;
};

export default IAuthRepository;
