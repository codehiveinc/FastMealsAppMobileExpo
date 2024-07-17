import { View, StyleSheet, ScrollView } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { CreateRestaurantScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import { useCallback, useState } from "react";
import {
  validateImage,
  validateText,
  validateTime,
} from "@/shared/infrastructure/ui/validations/validations";
import { TextField } from "@/shared/infrastructure/ui/components/TextField";
import ImageField from "@/shared/infrastructure/ui/components/ImageField";

const CreateRestaurantScreen = ({
  navigation,
}: CreateRestaurantScreenRouteProps) => {
  const [restaurantFormData, setRestaurantFormData] = useState({
    name: "",
    location: "",
    openingTime: "",
    closingTime: "",
    imageUri: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    location: "",
    openingTime: "",
    closingTime: "",
    imageUri: "",
  });

  const handleNameChange = (name: string) => {
    setRestaurantFormData((prev) => ({ ...prev, name }));
    setErrors((prev) => ({
      ...prev,
      name: validateText(name, "nombre"),
    }));
  };

  const handleLocationChange = (location: string) => {
    setRestaurantFormData((prev) => ({ ...prev, location }));
    setErrors((prev) => ({
      ...prev,
      location: validateText(location, "direccion"),
    }));
  };

  const handleOpeningTimeChange = (openingTime: string) => {
    setRestaurantFormData((prev) => ({ ...prev, openingTime }));
    setErrors((prev) => ({
      ...prev,
      openingTime: validateTime(openingTime, "hora de apertura"),
    }));
  };

  const handleClosingTimeChange = (closingTime: string) => {
    setRestaurantFormData((prev) => ({ ...prev, closingTime }));
    setErrors((prev) => ({
      ...prev,
      closingTime: validateTime(closingTime, "hora de cierre"),
    }));
  };

  const handleImageChange = async (uri: string) => {
    setRestaurantFormData({ ...restaurantFormData, imageUri: uri });
    setErrors((prev) => ({
      ...prev,
      imageUri: validateImage(uri),
    }));
  };

  const handleSubmit = useCallback(() => {
    const nameError = validateText(restaurantFormData.name, "nombre");
    const locationError = validateText(
      restaurantFormData.location,
      "direccion",
    );
    const openingTimeError = validateTime(
      restaurantFormData.openingTime,
      "hora de apertura",
    );
    const closingTimeError = validateTime(
      restaurantFormData.closingTime,
      "hora de cierre",
    );
    const imageError = validateImage(restaurantFormData.imageUri);

    setErrors({
      name: nameError,
      location: locationError,
      openingTime: openingTimeError,
      closingTime: closingTimeError,
      imageUri: imageError,
    });

    if (
      !nameError &&
      !locationError &&
      !openingTimeError &&
      !closingTimeError &&
      !imageError
    ) {
      // Lógica para guardar el restaurante
    }
  }, [restaurantFormData]);

  return (
    <BasicLayout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <AppBar leftIcon="chevron-back" title="Crear restaurante" />
          <ScrollView
            contentContainerStyle={styles.fieldsContainer}
            showsVerticalScrollIndicator={false}
          >
            <TextField
              label="Nombre"
              value={restaurantFormData.name}
              placeholder="Nombre"
              onChange={handleNameChange}
              errorMessage={errors.name}
            />

            <TextField
              label="Direccion"
              value={restaurantFormData.location}
              placeholder="Direccion"
              onChange={handleLocationChange}
              errorMessage={errors.location}
            />

            <TextField
              label="Hora de apertura"
              value={restaurantFormData.openingTime}
              placeholder="Hora de apertura"
              onChange={handleOpeningTimeChange}
              errorMessage={errors.openingTime}
            />

            <TextField
              label="Hora de cierre"
              value={restaurantFormData.closingTime}
              placeholder="Hora de cierre"
              onChange={handleClosingTimeChange}
              errorMessage={errors.closingTime}
            />

            <ImageField
              label="Imagen"
              fileValueUrl={restaurantFormData.imageUri}
              onChange={handleImageChange}
              errorMessage={errors.imageUri}
            />
          </ScrollView>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            text="Cancelar"
            backgroundColor={colors.white}
            textColor={colors.gray}
            width={"45%"}
            handlePress={() => navigation.goBack()}
          />
          <Button
            text="Guardar"
            backgroundColor={colors.primary}
            textColor={colors.white}
            width={"45%"}
            handlePress={handleSubmit}
          />
        </View>
      </View>
    </BasicLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  formContainer: {
    height: "90%",
  },
  fieldsContainer: {
    gap: 20,
  },
  buttonsContainer: {
    height: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CreateRestaurantScreen;
