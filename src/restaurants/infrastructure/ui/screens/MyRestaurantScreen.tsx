import { Image, StyleSheet, Text, View } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { MyRestaurantScreenRouteProps } from "@/users/infrastructure/ui/types/UsersScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { Section } from "@/users/infrastructure/ui/components/Section";
import { restaurantItem } from "@/database";

const userSections = [
  {
    title: "Agregar producto",
    routeName: "CreateMealScreen",
  },
  {
    title: "Productos",
    routeName: "MyMealsScreen",
  },
  {
    title: "Estadísticas",
    routeName: "MyRestaurantStatisticsScreen",
  },
  {
    title: "Historial de pedidos",
    routeName: "MyOrdersHistoryAdminScreen",
  },
];

const MyRestaurantScreen = ({ navigation }: MyRestaurantScreenRouteProps) => {
  // TODO: Agregar opcion para cambiar la informacion del restaurante
  const handleChangeUserInformation = () => {
    // navigation.navigate("UpdateRestaurantScreen");
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
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Mi Restaurante"
      />

      <View style={styles.container}>
        <View style={styles.subheaderContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.subheaderText}>Detalles del negocio</Text>
            {/* <TouchableOpacity onPress={() => handleChangeUserInformation()}>
              <Text style={styles.changeInfoText}>Cambiar</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoImgContainer}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: restaurantItem.imageUrl,
                }}
              />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTextHeader}>{restaurantItem.name}</Text>
              <Text style={styles.infoTextSubheader}>
                Dirección: {restaurantItem.address}
              </Text>
              <Text style={styles.infoTextSubheader}>
                Horario: {restaurantItem.openingTime} -{" "}
                {restaurantItem.closingTime}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionsContainer}>
          <Text style={styles.subheaderText}>Acciones</Text>
          <View style={styles.sectionsContainer}>{renderUserSections()}</View>
        </View>
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingTop: "6%",
  },
  sectionsContainer: {
    gap: 20,
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
  changeInfoText: {
    fontSize: 15,
    fontFamily: fonts.primary,
    color: colors.primary,
  },
  infoHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
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
  infoImgContainer: {
    width: "34%",
  },
  infoTextContainer: {
    width: "60%",
    gap: 3,
  },
  infoTextHeader: {
    fontSize: 18,
    fontFamily: fonts.primary,
  },
  infoTextSubheader: {
    fontSize: 15,
    fontFamily: fonts.primary,
    color: colors.gray,
  },
  profileImg: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default MyRestaurantScreen;
