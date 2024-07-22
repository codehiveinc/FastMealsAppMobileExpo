import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextField } from "@/shared/infrastructure/ui/components/TextField";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "../../../../shared/infrastructure/ui/validations/validations";
import User from "@/users/domain/types/user";

interface AuthRegisterFormProps {
  handlePressRegister: (user: User) => void;
}

const AuthRegisterForm = ({ handlePressRegister }: AuthRegisterFormProps) => {
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
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

  const handleEmailChange = useCallback((email: string) => {
    setRegisterFormData((prev) => ({ ...prev, email }));
    setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
  }, []);

  const handlePasswordChange = useCallback((password: string) => {
    setRegisterFormData((prev) => ({ ...prev, password }));
    setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
  }, []);

  const handlePhoneChange = useCallback((phone: string) => {
    const numericPhone = phone.replace(/[^\d]/g, "");
    setRegisterFormData((prev) => ({ ...prev, phone: numericPhone }));
    setErrors((prev) => ({ ...prev, phone: validatePhone(numericPhone) }));
  }, []);

  const handleSubmit = useCallback(() => {
    const emailError = validateEmail(registerFormData.email);
    const passwordError = validatePassword(registerFormData.password);
    const phoneError = validatePhone(registerFormData.phone);
    const firstNameError = validateName(registerFormData.firstName, "nombre");
    const lastNameError = validateName(registerFormData.lastName, "apellido");

    setErrors({
      email: emailError,
      password: passwordError,
      phone: phoneError,
      firstName: firstNameError,
      lastName: lastNameError,
    });

    if (
      !emailError &&
      !passwordError &&
      !phoneError &&
      !firstNameError &&
      !lastNameError
    ) {
      handlePressRegister({
        first_name: registerFormData.firstName,
        last_name: registerFormData.lastName,
        email: registerFormData.email,
        password: registerFormData.password,
        cellphone: registerFormData.phone,
      });
    }
  }, [handlePressRegister, registerFormData]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TextField
          label="Nombre"
          value={registerFormData.firstName}
          placeholder="Nombre"
          onChange={handleFirstNameChange}
          errorMessage={errors.firstName}
        />
        <TextField
          label="Apellido"
          value={registerFormData.lastName}
          placeholder="Apellido"
          onChange={handleLastNameChange}
          errorMessage={errors.lastName}
        />
        <TextField
          label="Correo Electrónico"
          value={registerFormData.email}
          placeholder="example@mail.com"
          keyboadType="email-address"
          onChange={handleEmailChange}
          errorMessage={errors.email}
        />
        <TextField
          label="Contraseña"
          value={registerFormData.password}
          placeholder="********"
          isPasswordField
          onChange={handlePasswordChange}
          errorMessage={errors.password}
        />
        <TextField
          label="Teléfono"
          value={registerFormData.phone}
          placeholder="1234567890"
          keyboadType="phone-pad"
          onChange={handlePhoneChange}
          errorMessage={errors.phone}
        />
      </ScrollView>
      <Button
        text="Registrarse"
        backgroundColor={colors.primary}
        textColor={colors.white}
        handlePress={handleSubmit}
        width={"100%"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContent: {
    gap: 20,
  },
});

export default AuthRegisterForm;
