import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { OrderScreenRouteProps } from "../types/OrderScreenRouteProps";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import BasicTabLayout from "@/shared/infrastructure/ui/layouts/BasicTabLayout";
import ProductItem from "../components/ProductItem";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const OrderScreen = ({ navigation }: OrderScreenRouteProps) => {
  const handlePress = () => {
    navigation.navigate("PaymentsScreen");
  };
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Hamburguesa doble queso",
      price: "$100.00",
      image: "https://via.placeholder.com/350",
      quantity: 0,
    },
    {
      id: "2",
      name: "Hamburguesa doble queso",
      price: "$100.00",
      image: "https://via.placeholder.com/350",
      quantity: 0,
    },
    {
      id: "3",
      name: "Hamburguesa doble queso",
      price: "$100.00",
      image: "https://via.placeholder.com/350",
      quantity: 0,
    },
    {
      id: "4",
      name: "Hamburguesa doble queso",
      price: "$100.00",
      image: "https://via.placeholder.com/350",
      quantity: 0,
    },
    {
      id: "5",
      name: "Hamburguesa doble queso",
      price: "$100.00",
      image: "https://via.placeholder.com/350",
      quantity: 0,
    },
    {
      id: "6",
      name: "Hamburguesa doble queso",
      price: "$100.00",
      image: "https://via.placeholder.com/350",
      quantity: 0,
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ProductItem
      id={item.id}
      name={item.name}
      price={item.price}
      imageUrl={item.image}
      quantity={item.quantity}
    />
  );

  return (
    <BasicTabLayout paddingBottom={"5%"}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Carrito de compras</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        text={"Terminar orden"}
        handlePress={handlePress}
        backgroundColor={colors.primary}
        textColor={colors.white}
        width={"100%"}
      />
    </BasicTabLayout>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: fonts.primary,
    fontSize: 25,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontFamily: fonts.primary,
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: "#0C9488",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: colors.primary,
    width: 25,
    aspectRatio: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: fonts.primary,
  },
});

export default OrderScreen;
