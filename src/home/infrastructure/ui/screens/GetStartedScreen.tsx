import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatars from "@assets/images/avatars.png";
import { GetStartedScreenRouteProps } from "../types/HomeScreensRouteProps";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import Button from "@/shared/infrastructure/ui/components/Button";

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
        <Button
          text="Comenzar"
          backgroundColor={colors.white}
          textColor={colors.black}
          handlePress={handlePress}
          width={"70%"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
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
    backgroundColor: colors.white,
  },
  headerMessage: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: fonts.primary,
  },
});

export default GetStartedScreen;
