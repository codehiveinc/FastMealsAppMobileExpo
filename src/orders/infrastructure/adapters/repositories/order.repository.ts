import IOrderRepository from "@/orders/application/ports/repositories/order.repository";
import BaseResponse from "@/shared/domain/types/base-response";
import { authClient } from "@/shared/infrastructure/axios/auth-axios";

class OrderRepository implements IOrderRepository {
  async listByUserUuid(userUuid: string): Promise<BaseResponse<Order[]>> {
    try {
      const response = await authClient.get(`/orders/userUuid/${userUuid}`);
      const data = response.data;

      return data;
    } catch (error) {
      const response = error.response.data;
      console.log(response);

      return response;
    }
  }
}

export default OrderRepository;
