import { Image, StyleSheet, Text, View } from "react-native";

type OrderItemProps = {
  productName: string;
  productPrice: number;
  productImage: string;
  quantityOrderItem: number;
};

const OrderItem = ({
  productName,
  productPrice,
  productImage,
  quantityOrderItem,
}: OrderItemProps) => {
  return (
    <View style={styles.orderItemContainer}>
      <Image
        style={styles.mealImg}
        source={{
          uri: productImage,
        }}
      />
      <View>
        <Text>{productName}</Text>
        <Text>Cantidad: {quantityOrderItem}</Text>
        <Text>Precio: ${productPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: "row",
    gap: 10,
  },
  mealImg: {
    height: "auto",
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default OrderItem;
