import { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { TextField } from "@/shared/infrastructure/ui/components/TextField";
import Button from "@/shared/infrastructure/ui/components/Button";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import {
  validateEmail,
  validatePassword,
} from "../../../../shared/infrastructure/ui/validations/validations";

interface AuthLoginFormProps {
  handlePressLogin: (email: string, password: string) => void;
}

const AuthLoginForm = ({ handlePressLogin }: AuthLoginFormProps) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = useCallback((email: string) => {
    setLoginFormData((prev) => ({ ...prev, email }));
    setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
  }, []);

  const handlePasswordChange = useCallback((password: string) => {
    setLoginFormData((prev) => ({ ...prev, password }));
    setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
  }, []);

  const handleSubmit = useCallback(() => {
    // const emailError = validateEmail(loginFormData.email);
    // const passwordError = validatePassword(loginFormData.password);

    // setErrors({ email: emailError, password: passwordError });

    // if (!emailError && !passwordError) {
    //   handlePressLogin(loginFormData.email, loginFormData.password);
    // }
    handlePressLogin(loginFormData.email, loginFormData.password);
  }, [handlePressLogin, loginFormData.email, loginFormData.password]);

  return (
    <View style={styles.container}>
      <View style={styles.fieldsContainer}>
        <TextField
          label="Correo Electrónico"
          value={loginFormData.email}
          placeholder="user@email.com"
          onChange={handleEmailChange}
          keyboadType="email-address"
          errorMessage={errors.email}
        />
        <TextField
          label="Contraseña"
          value={loginFormData.password}
          placeholder="********"
          onChange={handlePasswordChange}
          isPasswordField
          errorMessage={errors.password}
        />
      </View>
      <Button
        text="Iniciar Sesión"
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
  fieldsContainer: {
    gap: 20,
  },
});

export default AuthLoginForm;
