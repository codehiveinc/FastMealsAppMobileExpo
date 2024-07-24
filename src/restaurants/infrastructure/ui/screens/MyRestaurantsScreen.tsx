import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { ScrollView, StyleSheet } from "react-native";
import { MyRestaurantsScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import RestaurantOption from "../components/RestaurantOption";
import { restaurantItems } from "@/database";

const MyRestaurantsScreen = ({ navigation }: MyRestaurantsScreenRouteProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handlePressRestaurant = (restaurantId: number) => {
    navigation.navigate("MyRestaurantScreen", { restaurantId });
  };

  const handlePressCreateRestaurant = () => {
    navigation.navigate("CreateRestaurantScreen");
  };

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => goBack()}
        title="Mis Restaurantes"
        rightIcon="add"
        onRightPress={handlePressCreateRestaurant}
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {Object.values(restaurantItems).map((restaurant, key) => (
          <RestaurantOption
            key={key}
            handlePress={() => handlePressRestaurant(key + 1)}
            restaurantName={restaurant.name}
            restaurantImageUrl={restaurant.imageUrl}
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

export default MyRestaurantsScreen;
