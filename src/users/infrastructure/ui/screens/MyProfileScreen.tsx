import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MyProfileScreenRouteProps } from "../types/UsersScreensRouteProps";
import BasicTabLayout from "@/shared/infrastructure/ui/layouts/BasicTabLayout";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { Section } from "../components/Section";

const userSections = [
  {
    title: "Mis restaurantes",
    routeName: "MyRestaurantsScreen",
  },
  {
    title: "Politica de privacidad",
    routeName: "PrivacyPolicyScreen",
  },
];

const MyProfileScreen = ({ navigation }: MyProfileScreenRouteProps) => {
  const handleChangeUserInformation = () => {
    navigation.navigate("UpdateUserScreen");
  };

  const renderUserSections = () => {
    return userSections.map((section) => (
      <Section
        key={section.title}
        title={section.title}
        handlePress={() => navigation.navigate(section.routeName)}
      />
    ));
  };
  return (
    <BasicTabLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Mi Perfil</Text>
        </View>
        <View style={styles.subheaderContainer}>
          <View style={styles.userInformationHeaderContainer}>
            <Text style={styles.subheaderText}>Detalles Personales</Text>
            <TouchableOpacity onPress={() => handleChangeUserInformation()}>
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
              <Text style={styles.userInformationTextSubheader}>
                9613692958
              </Text>
            </View>
          </View>
        </View>
        {renderUserSections()}
      </View>
    </BasicTabLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  headerText: {
    fontSize: 34,
    fontFamily: fonts.primary,
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
    fontFamily: fonts.primary,
    color: colors.primary,
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
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
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
    fontFamily: fonts.primary,
  },
  userInformationTextSubheader: {
    fontSize: 15,
    fontFamily: fonts.primary,
    color: colors.gray,
  },
  userProfileImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default MyProfileScreen;
