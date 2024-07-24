import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { SearchScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import { Ionicons } from "@expo/vector-icons";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { ProductItemCard } from "../components/ProductItemCard";
import { foodItems } from "@/database";

const SearchScreen = ({ navigation }: SearchScreenRouteProps) => {
  const [search, setSearch] = useState("");
  const filteredProductos = Object.values(foodItems).filter((producto) =>
    producto.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <BasicLayout backgroundColor={colors.white}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Ionicons name="chevron-back" size={30} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar productos"
            value={search}
            onChangeText={setSearch}
            autoFocus
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.productsContainer}
          showsVerticalScrollIndicator={false}
        >
          {filteredProductos.map((producto) => (
            <ProductItemCard
              key={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.imageUrl}
              width={"40%"}
              onPress={() =>
                navigation.navigate("MealDetailScreen", { mealId: producto.id })
              }
            />
          ))}
        </ScrollView>
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: "7%",
  },
  searchInput: {
    fontFamily: fonts.primary,
    backgroundColor: "#EEEEEE",
    width: "80%",
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 25,
  },
  productsContainer: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
});

export default SearchScreen;
