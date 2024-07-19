import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { ScrollView, StyleSheet } from "react-native";
import { MyOrdersHistoryScreenRouteProps } from "../types/OrderScreenRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import OrderOption from "../components/OrderOption";

const MyOrdersHistoryScreen = ({
  navigation,
}: MyOrdersHistoryScreenRouteProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handlePressOrder = () => {
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
        <OrderOption
          restaurantName="Restaurante 1"
          restaurantImageUrl="https://via.placeholder.com/150"
          totalAmount={100}
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

export default MyOrdersHistoryScreen;
