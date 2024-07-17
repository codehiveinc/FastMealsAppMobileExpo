import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { ScrollView, StyleSheet } from "react-native";
import { ProductItemCard } from "../components/ProductItemCard";
import { MyMealsScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";

const productos = [
  {
    id: 1,
    title: "Veggie tomato mix",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "Egg and cucumber",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Fried chicken m.",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "Moi-moi and ekpa",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "Veggie tomato mix",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    title: "Egg and cucumber",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    title: "Fried chicken m.",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    title: "Moi-moi and ekpa",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    title: "Veggie tomato mix",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    title: "Egg and cucumber",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    title: "Fried chicken m.",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    title: "Moi-moi and ekpa",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    title: "Veggie tomato mix",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    title: "Egg and cucumber",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 15,
    title: "Fried chicken m.",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 16,
    title: "Moi-moi and ekpa",
    price: "$1,900",
    image: "https://via.placeholder.com/100",
  },
];

const MyMealsScreen = ({ navigation }: MyMealsScreenRouteProps) => {
  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Mis comidas"
      />
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {productos.map((producto) => (
          <ProductItemCard
            key={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
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
