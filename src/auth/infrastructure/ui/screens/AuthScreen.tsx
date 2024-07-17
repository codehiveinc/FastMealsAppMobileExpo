import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { AuthScreenRouteProps } from "../types/AuthScreensRouteProps";
import AuthHeader from "../components/AuthHeader";
import AuthLoginForm from "../components/AuthLoginForm";
import AuthRegisterForm from "../components/AuthRegisterForm";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AuthScreen = ({ navigation }: AuthScreenRouteProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const insets = useSafeAreaInsets();

  const handlePressLogin = (email: string, password: string) => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeTabScreen" }],
    });
  };

  const handlePressRegister = () => {
    console.log("Register");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
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
