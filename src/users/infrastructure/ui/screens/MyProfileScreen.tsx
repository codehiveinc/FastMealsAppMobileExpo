import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyProfileScreenRouteProps } from "../types/UsersScreensRouteProps";
import RootStackParamList from "@/shared/infrastructure/ui/types/RootStackParamList";

const userSections = [
  {
    title: "Ordenes",
    // routeName: "OrderScreen",
  },
  {
    title: "Mis restaurantes",
    // routeName: "MyRestaurantsScreen",
  },
  {
    title: "Politica de privacidad",
    routeName: "PrivacyPolicyScreen",
  },
  {
    title: "Cerrar Sesión",
    // routeName: "AuthScreen",
  },
];

const MyProfileScreen = ({ navigation }: MyProfileScreenRouteProps) => {
  const renderUserSections = () => {
    return userSections.map((section) => (
      <TouchableOpacity
        style={styles.userSectionContainer}
        onPress={() => navigation.navigate(section.routeName)}
        key={section.title}
      >
        <Text style={styles.subheaderText}>{section.title}</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
    ));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Mi Perfil</Text>
      </View>
      <View style={styles.subheaderContainer}>
        <View style={styles.userInformationHeaderContainer}>
          <Text style={styles.subheaderText}>Detalles Personales</Text>
          <TouchableOpacity>
            <Text style={styles.changeUserInformationText}>Cambiar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInformationContainer}>
          <View style={styles.userInformationImageContainer}>
            <Image
              style={styles.userProfileImage}
              source={{
                uri: "https://i.pinimg.com/736x/d4/3c/ae/d43caee734dfa1e2dd67c1861edb463a.jpg",
              }}
            />
          </View>
          <View style={styles.userInformationTextContainer}>
            <Text style={styles.userInformationTextHeader}>
              Fernando Guerrero
            </Text>
            <Text style={styles.userInformationTextSubheader}>
              devrrior@gmail.com
            </Text>
            <Text style={styles.userInformationTextSubheader}>9613692958</Text>
          </View>
        </View>
      </View>
      {renderUserSections()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingHorizontal: 50,
    paddingTop: 30,
    backgroundColor: "#F5F5F8",
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 34,
    fontFamily: "Poppins-Regular",
  },
  subheaderContainer: {
    gap: 5,
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  changeUserInformationText: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#0C9488",
  },
  userInformationHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInformationContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
  },
  userInformationImageContainer: {
    width: "34%",
  },
  userInformationTextContainer: {
    width: "60%",
    gap: 3,
  },
  userInformationTextHeader: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  userInformationTextSubheader: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#808690",
  },
  userProfileImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  userSectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
  },
});

export default MyProfileScreen;
