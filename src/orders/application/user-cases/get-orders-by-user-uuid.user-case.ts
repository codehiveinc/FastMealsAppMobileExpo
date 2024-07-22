import HttpRequestError from "@/shared/application/errors/http-request.error";
import IOrderRepository from "../ports/repositories/order.repository";

class GetOrdersByUserUuidUserCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async execute(userUuid: string): Promise<Order[]> {
    const response = await this.orderRepository.listByUserUuid(userUuid);

    if (response.success) {
      return response.data;
    }

    throw new HttpRequestError(response.message);
  }
}

export default GetOrdersByUserUuidUserCase;
