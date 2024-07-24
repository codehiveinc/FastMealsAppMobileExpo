import { View, Text, StyleSheet, ScrollView } from "react-native";
import { OrderScreenRouteProps } from "../types/OrderScreenRouteProps";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import BasicTabLayout from "@/shared/infrastructure/ui/layouts/BasicTabLayout";
import ProductCartItemCard from "../components/ProductCartItemCard";
import { foodItems, Order, order } from "@/database";
import { useMemo, useState } from "react";

const OrderScreen = ({ navigation }: OrderScreenRouteProps) => {
  const handlePress = () => {
    navigation.navigate("PaymentScreen", { totalAmount });
  };
  const [orderData, setOrderData] = useState<Order>(order);
  const totalAmount = useMemo(() => {
    return orderData.orderItems.reduce((acc, orderItem) => {
      const meal = foodItems[orderItem.foodItemId];
      return acc + meal.price * orderItem.quantity;
    }, 0);
  }, [orderData]);

  const updateQuantity = (id: number, change: number) => {
    setOrderData((prevOrderData) => {
      const updatedOrderItems = prevOrderData.orderItems.map((orderItem) => {
        if (orderItem.id === id) {
          const newQuantity = orderItem.quantity + change;
          if (newQuantity <= 0) {
            // Remove the order item
            return null;
          } else {
            return { ...orderItem, quantity: newQuantity };
          }
        } else {
          return orderItem;
        }
      });

      // Filter out null values (removed order items)
      const filteredOrderItems = updatedOrderItems.filter(
        (orderItem) => orderItem !== null
      );

      return { ...prevOrderData, orderItems: filteredOrderItems };
    });
  };

  return (
    <BasicTabLayout paddingBottom={"5%"}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Carrito de compras</Text>
      </View>
      <ScrollView>
        {orderData.orderItems.map((orderItem) => {
          const meal = foodItems[orderItem.foodItemId];
          return (
            <ProductCartItemCard
              key={orderItem.id}
              id={orderItem.id}
              name={meal.title}
              price={meal.price}
              quantity={orderItem.quantity}
              imageUrl={meal.imageUrl}
              handleQuantityChange={updateQuantity}
            />
          );
        })}
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
