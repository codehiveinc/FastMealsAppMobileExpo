import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { MealDetailScreenRouteProps } from "@/restaurants/infrastructure/ui/types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import Button from "@/shared/infrastructure/ui/components/Button";
import { BasicModal } from "@/shared/infrastructure/ui/components/BasicModal";
import { foodItems, order } from "@/database";

const MealDetailScreen = ({
  navigation,
  route,
}: MealDetailScreenRouteProps) => {
  const { mealId } = route.params;
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [meal, setMeal] = React.useState(foodItems[mealId]);

  const disableModal = () => {
    setIsModalVisible(false);
  };

  const handleAddToCart = () => {
    order.orderItems.push({
      id: order.orderItems.length + 1,
      foodItemId: mealId,
      quantity: 1,
    });
    setModalMessage("Alimento agregado al carrito");
    setIsModalVisible(true);
  };
  return (
    <BasicLayout>
      <BasicModal
        visible={isModalVisible}
        message={modalMessage}
        onClose={disableModal}
        primaryButtonText="Aceptar"
        onPrimaryButtonPress={disableModal}
      />
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Detalles del platillo"
      />

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: meal.imageUrl }} // reemplaza con la URL de tu imagen
        />
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.price}>${meal.price}</Text>
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
        handlePress={handleAddToCart}
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
