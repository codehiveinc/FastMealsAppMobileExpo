import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type OrderOptionProps = {
  restaurantName: string;
  restaurantImageUrl: string;
  totalAmount: number;
  handlePress: () => void;
};

const OrderOption = ({
  restaurantName,
  restaurantImageUrl,
  totalAmount,
  handlePress,
}: OrderOptionProps) => {
  return (
    <TouchableOpacity style={styles.orderContainer} onPress={handlePress}>
      <View style={styles.orderInfoContainer}>
        <Image
          style={styles.restaurantImage}
          source={{ uri: restaurantImageUrl }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.restaurantTitle}>{restaurantName}</Text>
          <Text>Total: ${totalAmount}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
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
    width: "30%",
    aspectRatio: 1,
  },
  orderInfoContainer: {
    flexDirection: "row",
    height: "100%",
    gap: 10,
  },
  infoTextContainer: {
    gap: 5,
    justifyContent: "center",
  },
  restaurantTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
});

export default OrderOption;
