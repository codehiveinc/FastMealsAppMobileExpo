import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { ScrollView, StyleSheet } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { MyOrdersHistoryAdminScreenRouteProps } from "../types/OrderScreenRouteProps";
import OrderOptionAdmin from "../components/OrderOptionAdmin";

const MyOrdersHistoryAdminScreen = ({
  navigation,
}: MyOrdersHistoryAdminScreenRouteProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handlePressOrder = () => {
    navigation.navigate("OrderAdminScreen");
  };

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => goBack()}
        title="Pedidos de clientes"
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <OrderOptionAdmin
          restaurantName="Restaurante 1"
          restaurantImageUrl="https://via.placeholder.com/150"
          orderStatus={"Pendiente"}
          handlePress={handlePressOrder}
        />
        <OrderOptionAdmin
          restaurantName="Restaurante 1"
          restaurantImageUrl="https://via.placeholder.com/150"
          orderStatus={"Confirmado"}
          handlePress={handlePressOrder}
        />
      </ScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    gap: 20,
  },
});

export default MyOrdersHistoryAdminScreen;
