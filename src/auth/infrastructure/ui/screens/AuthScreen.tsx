import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { AuthScreenRouteProps } from "../types/AuthScreensRouteProps";
import AuthHeader from "../components/AuthHeader";
import AuthLoginForm from "../components/AuthLoginForm";
import AuthRegisterForm from "../components/AuthRegisterForm";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createUserUseCase } from "@/users/infrastructure/dependecies";
import User from "@/users/domain/types/user";
import HttpRequestError from "@/shared/application/errors/http-request.error";
import { BasicModal } from "@/shared/infrastructure/ui/components/BasicModal";
import { useAuth } from "../hooks/useAuth";
import { createTokensUseCase } from "../../dependecies";

const AuthScreen = ({ navigation }: AuthScreenRouteProps) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const insets = useSafeAreaInsets();
  const { login } = useAuth();

  const onCloseModal = () => {
    setIsActiveModal(false);
    setModalMessage("");
  };

  const handlePressLogin = async (email: string, password: string) => {
    try {
      const tokens = await createTokensUseCase.execute(email, password);
      login(tokens.access_token, tokens.refresh_token);
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabScreen" }],
      });
    } catch (error) {
      if (error instanceof HttpRequestError) {
        setModalMessage(error.message);
        setIsActiveModal(true);
      }
    }
  };

  const handlePressRegister = async (user: User) => {
    try {
      await createUserUseCase.execute(user);
      setActiveTab(0);
      setModalMessage("Usuario creado correctamente");
      setIsActiveModal(true);
    } catch (error) {
      if (error instanceof HttpRequestError) {
        Alert.alert("Error", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <BasicModal
        message={modalMessage}
        visible={isActiveModal}
        primaryButtonText="Aceptar"
        onPrimaryButtonPress={onCloseModal}
        onClose={onCloseModal}
      />
      <AuthHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <View
        style={[styles.formContainer, { paddingBottom: insets.bottom + 20 }]}
      >
        {activeTab === 0 ? (
          <AuthLoginForm handlePressLogin={handlePressLogin} />
        ) : (
          <AuthRegisterForm handlePressRegister={handlePressRegister} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242, 242, 242, 0.8)",
    alignItems: "center",
    height: "100%",
  },
  formContainer: {
    width: "80%",
    height: "65%",
    paddingTop: "8%",
  },
});

export default AuthScreen;
