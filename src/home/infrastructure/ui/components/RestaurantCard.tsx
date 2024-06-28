import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type RestaurantCardProps = {
  imageUrl: string;
  name: string;
  onPressButton: () => void;
};

const RestaurantCard = ({
  imageUrl,
  name,
  onPressButton,
}: RestaurantCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttonText}>Ver alimentos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
    padding: 20,
    margin: 10,
    width: 200,
    gap: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 150,
    marginBottom: 15,
  },
  name: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontFamily: "Poppins-Regular",
    marginRight: 5,
    fontSize: 16,
    color: "#000",
  },
});

export default RestaurantCard;
