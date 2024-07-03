import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductItem from "../components/ProductItem";
import { SearchScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import { Ionicons } from "@expo/vector-icons";

const productos = [
  {
    id: 1,
    title: "Veggie tomato mix",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "Egg and cucumber",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Fried chicken m.",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "Moi-moi and ekpa",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "Veggie tomato mix",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    title: "Egg and cucumber",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    title: "Fried chicken m.",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    title: "Moi-moi and ekpa",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    title: "Veggie tomato mix",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    title: "Egg and cucumber",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    title: "Fried chicken m.",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    title: "Moi-moi and ekpa",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    title: "Veggie tomato mix",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    title: "Egg and cucumber",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 15,
    title: "Fried chicken m.",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 16,
    title: "Moi-moi and ekpa",
    price: "N1,900",
    image: "https://via.placeholder.com/100",
  },
];

const SearchScreen = ({ navigation }: SearchScreenRouteProps) => {
  const [search, setSearch] = useState("");

  const filteredProductos = productos.filter((producto) =>
    producto.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Productos</Text>
        <ScrollView contentContainerStyle={styles.productsContainer} showsVerticalScrollIndicator={false}>
          {filteredProductos.map((producto) => (
            <ProductItem
              key={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: "7%",
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: "#EEEEEE",
    width: "80%",
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 25,
  },
  contentContainer: {
    width: "100%",
    height: "93%",
    alignItems: "center",
    paddingTop: 40,
    gap: 20,
  },
  titleText: {
    fontFamily: "Poppins-Regular",
    fontSize: 28,
  },
  productsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    paddingBottom: 20,
  },
});

export default SearchScreen;
