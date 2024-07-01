import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthScreenRouteProps } from "../types/AuthScreensRouteProps";
interface loginFormData {
  email: string;
  password: string;
}
interface registerFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}
const AuthScreen = ({ navigation }: AuthScreenRouteProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loginFormData, setLoginFomrData] = useState<loginFormData>({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState<registerFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  const handlePressLogin = () => {
    navigation.navigate("HomeTabScreen");
  };

  const handlePressRegister = () => {
    console.log("Register");
  };


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}></Text>
        </View>
        <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 0 && styles.lineTab]}
            onPress={() => handleTabPress(0)}
          >
            <Text style={[styles.tab, activeTab === 0 && styles.activeTab]}>
              Inicia Sesión
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 1 && styles.lineTabRegister]}
            onPress={() => handleTabPress(1)}
          >
            <Text style={[styles.tab, activeTab === 1 && styles.activeTab]}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {activeTab === 0 && (
        <View>
          <Text style={styles.adress}>Correo Electronico</Text>
          <TextInput
            style={styles.input}
            placeholder="Dosamarvis@gmail.com"
            placeholderTextColor="#A9A9A9"
            value={loginFormData.email}
            onChange={(e) =>
              setLoginFomrData({ ...loginFormData, email: e.nativeEvent.text })
            }
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.adress}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="* * * * * * * * "
            placeholderTextColor="#A9A9A9"
            value={loginFormData.password}
            onChange={(e) =>
              setLoginFomrData({
                ...loginFormData,
                password: e.nativeEvent.text,
              })
            }
            secureTextEntry
          />
          <View style={styles.forgotContent}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handlePressLogin()}
          >
            <Text style={styles.loginButtonText}>Inicia Sesion</Text>
          </TouchableOpacity>
        </View>
      )}
      {activeTab === 1 && (
        <KeyboardAvoidingView
          style={{ flex: 1, width: "100%", backgroundColor: "Red" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView>
            <View style={styles.ScrollInput}>
              <Text style={styles.adress}>Nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="#A9A9A9"
                value={registerFormData.firstName}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    firstName: e.nativeEvent.text,
                  })
                }
                keyboardType="default"
                autoCapitalize="none"
              />
              <Text style={styles.adress}>Apellido</Text>
              <TextInput
                style={styles.input}
                placeholder="Apellido"
                placeholderTextColor="#A9A9A9"
                value={registerFormData.lastName}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    lastName: e.nativeEvent.text,
                  })
                }
                keyboardType="default"
                autoCapitalize="none"
              />
              <Text style={styles.adress}>Correo Electronico</Text>
              <TextInput
                style={styles.input}
                placeholder="Dosamarvis@gmail.com"
                placeholderTextColor="#A9A9A9"
                value={registerFormData.email}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    email: e.nativeEvent.text,
                  })
                }
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.adress}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="* * * * * * * * "
                placeholderTextColor="#A9A9A9"
                value={registerFormData.password}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    password: e.nativeEvent.text,
                  })
                }
                secureTextEntry
              />
              <Text style={styles.adress}>Numero de telefono</Text>
              <TextInput
                style={styles.input}
                placeholder="xxx-xxxx-xxxx"
                placeholderTextColor="#A9A9A9"
                value={registerFormData.phone}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    phone: e.nativeEvent.text,
                  })
                }
                keyboardType="number-pad"
              />
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => handlePressRegister()}
              >
                <Text style={styles.loginButtonText}>Crea tu cuenta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
    backgroundColor: "white",
    paddingTop: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,        
    shadowColor: "#000",
    width: "100%",
  },
  iconWrapper: {
    backgroundColor: "#fff",

    borderRadius: 50,
    padding: 20,
    marginBottom: 10,
  },
  icon: {
    fontSize: 40,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 30,
    paddingBottom: 5,
    color: "#888",
  },
  activeTab: {
    color: "black",
  },
  lineTab: {
    borderBottomWidth: 4,
    borderBottomColor: "#0C9488",
    marginRight: 60,
  },
  lineTabRegister: {
    borderBottomWidth: 4,
    borderBottomColor: "#0C9488",
    marginLeft: 60,
  },
  input: {
    width: 314,
    padding: 5,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginTop: 5,
    marginBottom: 20,
    fontWeight: "500",
    fontSize: 17,
  },
  forgotPassword: {
    color: "#000E21",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
  loginButton: {
    width: 314,
    padding: 24,
    backgroundColor: "#0C9488",
    borderRadius: 30,
    alignItems: "center",
    marginTop: "20%",
  },
  loginButtonText: {
    color: "white",
    fontSize: 17,
  },
  adress: {
    width: "80%",
    marginTop: "5%",
    paddingLeft: 2,
    color: "#000000",
    fontSize: 15,
  },
  forgotContent: {
    width: "80%",
    marginTop: 15,
  },
  tabTex: {
    fontSize: 18,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  ScrollInput: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 25,
  },
});
export default AuthScreen;

