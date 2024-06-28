import { StyleSheet, ScrollView, TextInput, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantCard from "../components/RestaurantCard";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar leftIcon="menu" rightIcon="cart-outline" />
      <View style={styles.containerMessage}>
        <Text style={styles.textMessage}>
          Echa un vistazo a los establecimientos
        </Text>
      </View>
      <View style={styles.containerSearchBox}>
        <MaterialIcons
          name="search"
          size={28}
          color="#000"
          style={styles.icon}
        />
        <TextInput
          placeholder={"Search"}
          placeholderTextColor="#A9A9A9"
          style={styles.input}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 45,
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
    marginVertical: 20,
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
