import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { CreateMealScreenRouteProps } from "../types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { TextField } from "@/shared/infrastructure/ui/components/TextField";
import {
  validateImage,
  validatePrice,
  validateText,
} from "@/shared/infrastructure/ui/validations/validations";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { BasicModal } from "@/shared/infrastructure/ui/components/BasicModal";
import ImageField from "@/shared/infrastructure/ui/components/ImageField";

const CreateMealScreen = ({ navigation }: CreateMealScreenRouteProps) => {
  const [productFormData, setProductFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUri: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
    description: "",
    imageUri: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleNameChange = (name: string) => {
    setProductFormData((prev) => ({ ...prev, name }));
    setErrors((prev) => ({
      ...prev,
      name: validateText(name, "nombre"),
    }));
  };

  const handleDescriptionChange = (description: string) => {
    setProductFormData((prev) => ({ ...prev, description }));
    setErrors((prev) => ({
      ...prev,
      description: validateText(description, "descripcion"),
    }));
  };

  const handlePriceChange = (price: string) => {
    const numericPrice = price.replace(/[^\d]/g, "");
    setProductFormData((prev) => ({ ...prev, price: numericPrice }));
    setErrors((prev) => ({
      ...prev,
      price: validatePrice(numericPrice, "precio"),
    }));
  };

  const handleImageChange = async (uri: string) => {
    setProductFormData({ ...productFormData, imageUri: uri });
    setErrors((prev) => ({
      ...prev,
      imageUri: validateImage(uri),
    }));
  };

  const handleSubmit = useCallback(() => {
    const nameError = validateText(productFormData.name, "nombre");
    const descriptionError = validateText(
      productFormData.description,
      "descripcion",
    );
    const priceError = validatePrice(productFormData.price, "precio");
    const imageError = validateImage(productFormData.imageUri);

    setErrors({
      name: nameError,
      description: descriptionError,
      price: priceError,
      imageUri: imageError,
    });

    if (!nameError && !descriptionError && !priceError && !imageError) {
      setModalMessage("Alimento creado correctamente");
      setIsModalVisible(true);
    }
  }, [productFormData]);

  return (
    <BasicLayout>
      <BasicModal
        message={modalMessage}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        primaryButtonText="Aceptar"
        onPrimaryButtonPress={() => {
          setIsModalVisible(false);
          return navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.form}>
          <AppBar leftIcon="chevron-back" title="Crear alimento" />
          <TextField
            label="Nombre"
            value={productFormData.name}
            placeholder="Hamburguesa doble"
            onChange={handleNameChange}
            errorMessage={errors.name}
          />

          <TextField
            label="Descripción"
            value={productFormData.description}
            placeholder="Comida deliciosa, etc."
            onChange={handleDescriptionChange}
            errorMessage={errors.description}
          />

          <TextField
            label="Precio"
            value={productFormData.price}
            placeholder="$90.00"
            onChange={handlePriceChange}
            errorMessage={errors.price}
          />

          <ImageField
            label="Imagen"
            fileValueUrl={productFormData.imageUri}
            onChange={handleImageChange}
            errorMessage={errors.imageUri}
          />
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
  form: {
    gap: 20,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default CreateMealScreen;
