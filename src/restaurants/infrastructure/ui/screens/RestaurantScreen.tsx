import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RestaurantScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import ProductItem from "../components/ProductItemCard";

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

const RestaurantScreen = ({ navigation }: RestaurantScreenRouteProps) => {
  const handlePressDetail = () => {
    navigation.navigate("MealDetailScreen");
  };

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={handlePress}
        title="Restaurante"
      />
      <View style={styles.content}>
        <View style={styles.restaurantInfoCard}>
          <Image
            style={styles.restauranImg}
            source={{ uri: "https://via.placeholder.com/300" }}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTextHeader}>La casa de las pizzas</Text>
            <Text style={styles.infoTextSubheader}>
              Dirección: Av. Central C.P. 29049
            </Text>
            <Text style={styles.infoTextSubheader}>Horario: 10:00 - 18:00</Text>
          </View>
        </View>
        <View>
          <Text style={styles.headerText}>Alimentos</Text>
          <ScrollView contentContainerStyle={styles.productsContainer}>
            {productos.map((producto) => (
              <ProductItem
                key={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                width={"40%"}
                onPress={handlePressDetail}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 30,
  },
  restaurantInfoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
  },
  restauranImg: {
    width: "34%",
    aspectRatio: 1,
  },
  infoTextContainer: {
    width: "60%",
    gap: 6,
  },
  infoTextHeader: {
    fontSize: 18,
    fontFamily: fonts.primary,
  },
  infoTextSubheader: {
    fontSize: 15,
    fontFamily: fonts.primary,
    color: colors.gray,
  },
  headerText: {
    fontSize: 24,
    fontFamily: fonts.primary,
  },
  productsContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
});

export default RestaurantScreen;
