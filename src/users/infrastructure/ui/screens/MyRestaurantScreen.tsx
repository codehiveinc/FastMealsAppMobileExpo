import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyRestaurantScreenRouteProps } from "../types/UsersScreensRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import RootStackParamList from "@/shared/infrastructure/ui/types/RootStackParamList";

const userSections = [
  {
    title: "Productos",
     //routeName: "EditMealScreen",
  },
  {
    title: "Agregar producto",
    // routeName: "MyRestaurantsScreen",
  },

];

const MyRestaurantScreen = ({ navigation }: MyRestaurantScreenRouteProps) => {
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
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Mi Restaurante"
      />
    
   
      <View style={styles.subheaderContainer}>
        <View style={styles.userInformationHeaderContainer}>
          <Text style={styles.subheaderText}>Detalles del restaurant</Text>
          <TouchableOpacity>
            <Text style={styles.changeUserInformationText}>Editar</Text>
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
              La casa de las pizzas
            </Text>
            <Text style={styles.userInformationTextSubheader}>
              Direccion : Calle 123 entre 45 y 67
            </Text>
            <Text style={styles.userInformationTextSubheader}>Horario de 6 pm a 12 am</Text>
          </View>
        </View>
      </View><Text style={styles.subheaderText}>Acciones</Text>
      {renderUserSections()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingHorizontal: 50,
    paddingTop: 30,
    paddingLeft : 10,
    backgroundColor: "#F5F5F8",
    width: "100%",
    height: "100%",
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
    paddingBottom : 10
  },
  userInformationHeaderContainer: {
    paddingBottom : 10,
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
    elevation: 5,
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
    elevation: 5,
    shadowOpacity: 0.25,
  },
});

export default MyRestaurantScreen;
