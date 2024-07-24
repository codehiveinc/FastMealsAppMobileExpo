import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RestaurantScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { ProductItemCard } from "../components/ProductItemCard";
import { useState } from "react";
import { restaurantItems } from "@/database";

const RestaurantScreen = ({
  navigation,
  route,
}: RestaurantScreenRouteProps) => {
  const { restaurantId } = route.params;
  const [restaurant, setRestaurant] = useState(restaurantItems[restaurantId]);
  const handlePressDetail = (mealId: number) => {
    navigation.navigate("MealDetailScreen", { mealId });
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
            source={{ uri: restaurant.imageUrl }}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTextHeader}>{restaurant.name}</Text>
            <Text style={styles.infoTextSubheader}>
              Dirección: {restaurant.address}
            </Text>
            <Text style={styles.infoTextSubheader}>
              Horario: {restaurant.openingTime} - {restaurant.closingTime}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.headerText}>Alimentos</Text>
          <ScrollView
            contentContainerStyle={styles.productsContainer}
            showsVerticalScrollIndicator={false}
          >
            {restaurantItems[restaurantId].meals.map((producto) => (
              <ProductItemCard
                key={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.imageUrl}
                width={"40%"}
                onPress={() => handlePressDetail(producto.id)}
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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
});

export default RestaurantScreen;
