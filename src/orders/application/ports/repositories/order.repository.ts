import BaseResponse from "@/shared/domain/types/base-response";

interface IOrderRepository {
  listByUserUuid(userUuid: string): Promise<BaseResponse<Order[]>>;
}

export default IOrderRepository;
