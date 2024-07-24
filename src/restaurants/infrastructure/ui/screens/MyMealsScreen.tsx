import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { ScrollView, StyleSheet } from "react-native";
import { ProductItemCard } from "../components/ProductItemCard";
import { MyMealsScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { restaurantItems } from "@/database";

const MyMealsScreen = ({ navigation, route }: MyMealsScreenRouteProps) => {
  const { restaurantId } = route.params;

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Mis comidas"
      />
      <ScrollView
        contentContainerStyle={styles.productsContainer}
        showsVerticalScrollIndicator={false}
      >
        {restaurantItems[restaurantId].meals.map((food) => (
          <ProductItemCard
            key={food.id}
            title={food.title}
            price={food.price}
            image={food.imageUrl}
            width={"40%"}
            onPress={() => navigation.navigate("MealDetailAdminScreen")}
          />
        ))}
      </ScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default MyMealsScreen;
