import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyRestaurantsScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import { Ionicons } from "@expo/vector-icons";

const MyRestaurantsScreen = ({ navigation }: MyRestaurantsScreenRouteProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => goBack()}
        title="Mis Restaurantes"
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={{ overflow: "visible" }}
      >
        <View style={styles.restaurantItemContainer}>
          <View style={styles.restaurantInfoContainer}>
            <Image
              style={styles.restaurantImage}
              source={{ uri: "https://via.placeholder.com/350" }}
            />
            <Text style={styles.restaurantTitle}>
              Restaurante los aguacates
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.restaurantItemContainer}>
          <View style={styles.restaurantInfoContainer}>
            <Image
              style={styles.restaurantImage}
              source={{ uri: "https://via.placeholder.com/350" }}
            />
            <Text style={styles.restaurantTitle}>
              Restaurante los aguacates
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.restaurantItemContainer}>
          <View style={styles.restaurantInfoContainer}>
            <Image
              style={styles.restaurantImage}
              source={{ uri: "https://via.placeholder.com/350" }}
            />
            <Text style={styles.restaurantTitle}>
              Restaurante los aguacates
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.restaurantItemContainer}>
          <View style={styles.restaurantInfoContainer}>
            <Image
              style={styles.restaurantImage}
              source={{ uri: "https://via.placeholder.com/350" }}
            />
            <Text style={styles.restaurantTitle}>
              Restaurante los aguacates
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingHorizontal: 30,
    backgroundColor: "#F5F5F8",
    width: "100%",
    height: "100%",
  },
  scrollViewContainer: {
    gap: 20,
  },
  restaurantItemContainer: {
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
  restaurantInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  restaurantImage: {
    borderRadius: 99,
    width: "16%",
    height: 42,
  },
  restaurantTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
});

export default MyRestaurantsScreen;
