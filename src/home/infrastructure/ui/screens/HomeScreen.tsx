import { StyleSheet, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantCard from "../components/RestaurantCard";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { HomeScreenRouteProps } from "../types/HomeScreensRouteProps";

const HomeScreen = ({ navigation }: HomeScreenRouteProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        leftIcon="menu"
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
          <RestaurantCard
            imageUrl="https://via.placeholder.com/350"
            name="Restaurant 1"
            onPressButton={() => console.log("Button pressed")}
          />
          <RestaurantCard
            imageUrl="https://via.placeholder.com/350"
            name="Restaurant 1"
            onPressButton={() => console.log("Button pressed")}
          />
          <RestaurantCard
            imageUrl="https://via.placeholder.com/350"
            name="Restaurant 1"
            onPressButton={() => console.log("Button pressed")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 45,
  },
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
