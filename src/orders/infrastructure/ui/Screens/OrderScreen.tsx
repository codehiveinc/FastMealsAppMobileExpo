import { View, Text, StyleSheet, ScrollView } from "react-native";
import { OrderScreenRouteProps } from "../types/OrderScreenRouteProps";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import BasicTabLayout from "@/shared/infrastructure/ui/layouts/BasicTabLayout";
import ProductCartItemCard from "../components/ProductCartItemCard";
import { Order, order } from "@/database";
import { useState } from "react";

const OrderScreen = ({ navigation }: OrderScreenRouteProps) => {
  const handlePress = () => {
    navigation.navigate("PaymentScreen");
  };

  const [orderData, setOrderData] = useState<Order>(order);

  const updateQuantity = (id: number, change: number) => {
    setOrderData({
      ...orderData,
      orderItems: orderData.orderItems.map((orderItem) =>
        orderItem.id === id
          ? { ...orderItem, quantity: orderItem.quantity + change }
          : orderItem,
      ),
    });
  };

  return (
    <BasicTabLayout paddingBottom={"5%"}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Carrito de compras</Text>
      </View>
      <ScrollView>
        {orderData.orderItems.map((orderItem) => (
          <ProductCartItemCard
            key={orderItem.id}
            id={orderItem.id}
            name={orderItem.foodItem.title}
            price={orderItem.foodItem.price}
            quantity={orderItem.quantity}
            imageUrl={orderItem.foodItem.imageUrl}
            handleQuantityChange={updateQuantity}
          />
        ))}
      </ScrollView>
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
