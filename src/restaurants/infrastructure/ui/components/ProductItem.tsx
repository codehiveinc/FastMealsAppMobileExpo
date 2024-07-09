import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ProductItemProps = {
  title: string;
  price: string;
  image: string;
  onpress: () => void;
};

const ProductItem = ({ title, price, image , onpress }: ProductItemProps) => {
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "35%",
    gap: 10,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 5,
    shadowColor: "#000",
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
