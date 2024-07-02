import { View, Text, Image, StyleSheet } from "react-native";

type ProductItemProps = {
  title: string;
  price: string;
  image: string;
};

const ProductItem = ({ title, price, image }: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    margin: 10,
    width: "40%",
    gap: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: "medium",
    textAlign: "center",
  },
  price: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#888",
  },
});

export default ProductItem;
