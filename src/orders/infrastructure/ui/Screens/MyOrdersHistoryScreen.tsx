import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { MyOrdersHistoryScreenRouteProps } from "../types/OrderScreenRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import OrderOption from "../components/OrderOption";
import { useAuth } from "@/auth/infrastructure/ui/hooks/useAuth";
import { useEffect, useState } from "react";
import { getOrdersByUserUuidUserCase } from "../../dependecies";
import HttpRequestError from "@/shared/application/errors/http-request.error";

const MyOrdersHistoryScreen = ({
  navigation,
}: MyOrdersHistoryScreenRouteProps) => {
  const { authState } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const userUuid = authState.user.user_uuid;

    const fetchOrders = async () => {
      try {
        const data = await getOrdersByUserUuidUserCase.execute(userUuid!);
        setOrders(data);
      } catch (error) {
        if (error instanceof HttpRequestError) {
          Alert.alert("Error", error.message);
        }
      }
    };

    fetchOrders();
  }, [authState.user.user_uuid]);

  const goBack = () => {
    navigation.goBack();
  };

  const handlePressOrder = (orderUuid: string) => {
    navigation.navigate("MyOrderHistoryScreen");
  };

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => goBack()}
        title="Historial de pedidos"
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {orders.map((order) => (
          <OrderOption
            key={order.uuid}
            restaurantName={`Orden #${order.id}`}
            restaurantImageUrl={
              "https://mortonfoodservice.com/content/uploads/restaurant-patio-morton.png"
            }
            totalAmount={order.total_amount}
            handlePress={handlePressOrder}
          />
        ))}
      </ScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    gap: 20,
  },
});

export default MyOrdersHistoryScreen;
