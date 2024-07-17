import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type RestaurantOptionProps = {
  restaurantName: string;
  restaurantImageUrl: string;
  handlePress: () => void;
};

const RestaurantOption = ({
  restaurantName,
  restaurantImageUrl,
  handlePress,
}: RestaurantOptionProps) => {
  return (
    <TouchableOpacity
      style={styles.restaurantItemContainer}
      onPress={handlePress}
    >
      <Image
        style={styles.restaurantImage}
        source={{ uri: restaurantImageUrl }}
      />
      <Text style={styles.restaurantTitle}>{restaurantName}</Text>
      <Ionicons name="chevron-forward" size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantItemContainer: {
    gap: 10,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
  },
  restaurantImage: {
    borderRadius: 99,
    width: "16%",
    aspectRatio: 1,
  },
  restaurantTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    flex: 1,
  },
});

export default RestaurantOption;
