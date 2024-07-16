import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MealImage from "assets/images/MealImage.png";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { MealDetailScreenRouteProps } from "@/restaurants/infrastructure/ui/types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import Button from "@/shared/infrastructure/ui/components/Button";
const MealDetailScreen = ({ navigation }: MealDetailScreenRouteProps) => {
  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Detalles del platillo"
      />

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://via.placeholder.com/300" }} // reemplaza con la URL de tu imagen
        />
        <Text style={styles.title}>Veggie tomato mifasd asdf dsafx</Text>
        <Text style={styles.price}>$1,900</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Información de entrega</Text>
          <Text style={styles.infoText}>
            Entregas de Lunes a Domingo de 10 am a 10 pm
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Política de retorno</Text>
          <Text style={styles.infoText}>
            Si el producto se encuentra en mal estado se aplica la política de
            retorno
          </Text>
        </View>
      </View>
      <Button
        text="Agregar al carrito"
        handlePress={() => navigation.navigate("Cart")}
        backgroundColor={colors.primary}
        textColor={colors.white}
        width={"100%"}
      />
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    gap: 25,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 75,
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: 28,
    textAlign: "center",
  },
  price: {
    fontFamily: fonts.primary,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
  },
  infoText: {
    fontFamily: fonts.primary,
    fontSize: 15,
    color: colors.gray,
    textAlign: "justify",
  },
});

export default MealDetailScreen;
