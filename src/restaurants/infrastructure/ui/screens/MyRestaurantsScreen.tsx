import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { ScrollView, StyleSheet } from "react-native";
import { MyRestaurantsScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import RestaurantOption from "../components/RestaurantOption";

const restaurants = [
  {
    id: "1",
    name: "Restaurante los aguacates asdf dsaf",
    image: "https://via.placeholder.com/350",
  },
  {
    id: "2",
    name: "Restaurante los aguacates asdf dsaf",
    image: "https://via.placeholder.com/350",
  },
  {
    id: "3",
    name: "Restaurante los aguacates asdf dsaf",
    image: "https://via.placeholder.com/350",
  },
  {
    id: "4",
    name: "Restaurante los aguacates asdf dsaf",
    image: "https://via.placeholder.com/350",
  },
  {
    id: "5",
    name: "Restaurante los aguacates asdf dsaf",
    image: "https://via.placeholder.com/350",
  },
];

const MyRestaurantsScreen = ({ navigation }: MyRestaurantsScreenRouteProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handlePressRestaurant = () => {
    navigation.navigate("MyRestaurantScreen");
  };

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => goBack()}
        title="Mis Restaurantes"
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={{ overflow: "visible" }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantOption
            key={restaurant.id}
            handlePress={handlePressRestaurant}
            restaurantName={restaurant.name}
            restaurantImageUrl={restaurant.image}
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
