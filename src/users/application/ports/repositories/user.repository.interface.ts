import BaseReponse from "@/shared/domain/types/base-response";
import User from "@/users/domain/types/user";

interface IUserRepository {
  createUser: (user: User) => Promise<BaseReponse<User>>;
}

export default IUserRepository;
