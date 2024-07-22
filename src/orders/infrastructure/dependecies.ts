import GetOrdersByUserUuidUserCase from "../application/user-cases/get-orders-by-user-uuid.user-case";
import OrderRepository from "./adapters/repositories/order.repository";

const orderRepository = new OrderRepository();

const getOrdersByUserUuidUserCase = new GetOrdersByUserUuidUserCase(
  orderRepository,
);

export { getOrdersByUserUuidUserCase };
