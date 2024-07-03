import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatars from "@assets/images/avatars.png";
import { GetStartedScreenRouteProps } from "../types/HomeScreensRouteProps";

const GetStartedScreen = ({ navigation }: GetStartedScreenRouteProps) => {
  const handlePress = () => {
    navigation.navigate("AuthScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.elipseCircle} />
        <Text style={styles.headerMessage}>Comida para todos</Text>
      </View>
      <View style={styles.avatarsContainer}>
        <Image source={Avatars} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D9488",
  },
  headerContainer: {
    paddingHorizontal: 40,
    gap: 20,
    height: "30%",
  },
  avatarsContainer: {
    height: "60%",
  },
  bottomContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  elipseCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
  },
  headerMessage: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    width: "70%",
  },
  buttonText: {
    fontSize: 16,
    color: "#000000",
  },
});

export default GetStartedScreen;
