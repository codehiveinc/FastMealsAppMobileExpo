import { StyleSheet, ScrollView, View, Text } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { HomeScreenRouteProps } from "../types/HomeScreensRouteProps";
import BasicTabLayout from "@/shared/infrastructure/ui/layouts/BasicTabLayout";
import { restaurantItems } from "@/database";

const HomeScreen = ({ navigation }: HomeScreenRouteProps) => {
  const handlePress = (restaurantId: number) => {
    navigation.navigate("RestaurantScreen", { restaurantId });
  };

  const renderRestaurantCards = () => {
    return Object.values(restaurantItems).map((restaurant, key) => (
      <RestaurantCard
        key={key + 1}
        imageUrl={restaurant.imageUrl}
        name={restaurant.name}
        onPressButton={() => handlePress(key + 1)}
      />
    ));
  };

  return (
    <BasicTabLayout>
      <AppBar
        rightIcon="search"
        onRightPress={() => navigation.navigate("SearchScreen")}
      />
      <View style={styles.containerMessage}>
        <Text style={styles.textMessage}>
          Echa un vistazo a los establecimientos
        </Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.cardsContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {renderRestaurantCards()}
        </ScrollView>
      </View>
    </BasicTabLayout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: -45,
  },
  searchBar: {
    margin: 16,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#EFEEEE",
  },
  cardsContainer: {
    alignItems: "center",
  },
  containerMessage: {
    marginTop: 20,
    marginBottom: 30,
  },
  textMessage: {
    fontFamily: "Poppins-Regular",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 40,
  },
  containerSearchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default HomeScreen;
