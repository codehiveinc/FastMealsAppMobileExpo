import { Image, StyleSheet, Text, View } from "react-native";
import { MyRestaurantStatisticsRouteProps as MyRestaurantStatisticsScreeRouteProps } from "../types/RestaurantsScreensRouteProps";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";

const MyRestaurantStatisticsScreen = ({
  navigation,
}: MyRestaurantStatisticsScreeRouteProps) => {
  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Estadísticas"
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Estadísticas de tu restaurante</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Ventas del mes: $15,000.00</Text>
            <Text style={styles.text}>Numero de ventas del mes: 131</Text>
            <Text style={styles.text}>
              Calificación de los clientes: Positiva
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Gráfica de comentarios semanales</Text>
          <View style={styles.infoContainer}>
            <Image
              source={{ uri: "https://res.cloudinary.com/dl4lwk4ng/image/upload/v1721659637/rent-ride-images/hvptsamnuw30wqhk0db7.jpg" }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Prediccion de tendencia</Text>
          <View style={styles.infoContainer}>
            <Image
              source={{ uri: "https://res.cloudinary.com/dl4lwk4ng/image/upload/v1721659633/rent-ride-images/uhc7qpsvsrwlfmit3gv8.jpg" }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
  },
  infoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.primary,
  },
});

export default MyRestaurantStatisticsScreen;
