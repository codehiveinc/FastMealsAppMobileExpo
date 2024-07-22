import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { TextField } from "@/shared/infrastructure/ui/components/TextField";
import {
  validateName,
  validatePhone,
} from "@/shared/infrastructure/ui/validations/validations";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { UpdateUserScreenRouteProps } from "../types/UsersScreensRouteProps";

const UpdateUserScreen = ({
  navigation,
  route,
}: UpdateUserScreenRouteProps) => {
  const { userUuid, firstName, lastName, cellphone } = route.params;

  const [registerFormData, setRegisterFormData] = useState({
    firstName,
    lastName,
    cellphone,
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    cellphone: "",
  });

  const handleFirstNameChange = useCallback((firstName: string) => {
    setRegisterFormData((prev) => ({ ...prev, firstName }));
    setErrors((prev) => ({
      ...prev,
      firstName: validateName(firstName, "nombre"),
    }));
  }, []);

  const handleLastNameChange = useCallback((lastName: string) => {
    setRegisterFormData((prev) => ({ ...prev, lastName }));
    setErrors((prev) => ({
      ...prev,
      lastName: validateName(lastName, "apellido"),
    }));
  }, []);

  const handlePhoneChange = useCallback((phone: string) => {
    const numericPhone = phone.replace(/[^\d]/g, "");
    setRegisterFormData((prev) => ({ ...prev, cellphone: numericPhone }));
    setErrors((prev) => ({ ...prev, cellphone: validatePhone(numericPhone) }));
  }, []);

  const handleSubmit = useCallback(() => {
    const phoneError = validatePhone(registerFormData.cellphone);
    const firstNameError = validateName(registerFormData.firstName, "nombre");
    const lastNameError = validateName(registerFormData.lastName, "apellido");

    setErrors({
      cellphone: phoneError,
      firstName: firstNameError,
      lastName: lastNameError,
    });

    if (!phoneError && !firstNameError && !lastNameError) {
    }
  }, [registerFormData]);

  return (
    <BasicLayout>
      <View style={styles.container}>
        <View style={styles.form}>
          <AppBar
            title="Editar mi perfil"
            leftIcon="chevron-back"
            onLeftPress={() => navigation.goBack()}
          />
          <TextField
            label="Nombre"
            value={registerFormData.firstName}
            placeholder="John"
            onChange={handleFirstNameChange}
            errorMessage={errors.firstName}
          />
          <TextField
            label="Apellido"
            value={registerFormData.lastName}
            placeholder="Doe"
            onChange={handleLastNameChange}
            errorMessage={errors.lastName}
          />
          <TextField
            label="Teléfono"
            value={registerFormData.cellphone}
            placeholder="9121231295"
            keyboadType="phone-pad"
            onChange={handlePhoneChange}
            errorMessage={errors.cellphone}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            text="Cancelar"
            handlePress={() => navigation.goBack()}
            backgroundColor={colors.white}
            textColor={colors.gray}
            width={"45%"}
          />
          <Button
            text="Guardar"
            handlePress={handleSubmit}
            backgroundColor={colors.primary}
            textColor={colors.white}
            width={"45%"}
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
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
export default UpdateUserScreen;
