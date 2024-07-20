import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { OrderAdminScreenRouteProps } from "../types/OrderScreenRouteProps";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { Ionicons } from "@expo/vector-icons";
import ImageModal from "@/shared/infrastructure/ui/components/ImageModal";
import { useState } from "react";

const OrderAdminScreen = ({ navigation }: OrderAdminScreenRouteProps) => {
  const [orderStatus, setOrderStatus] = useState("unconfirmed");
  const [isVisibleImagePreview, setIsVisibleImagePreview] = useState(false);

  const openImagePreview = () => {
    setIsVisibleImagePreview(true);
  };

  const closeImagePreview = () => {
    setIsVisibleImagePreview(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <BasicLayout>
      <ImageModal
        isVisible={isVisibleImagePreview}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAEihCe4q5ACEsAOsUPVYSjZPKTpP4Xg0rg&s"
        onClose={closeImagePreview}
      />
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => goBack()}
        title="Detalles del pedido"
      />
      <View style={styles.sectionContainers}>
        <View>
          <Text style={styles.title}>Detalles</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Núm. pedido: 5</Text>
            <Text style={styles.text}>Estado: Pendiente</Text>
            <Text style={styles.text}>Total: $500.00</Text>
            <Text style={styles.text}>Fecha: 12/08/2023</Text>
            <Text style={styles.text}>Método de pago: Efectivo</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Confirmar método de pago</Text>
          <View style={styles.infoContainer}>
            {orderStatus === "unconfirmed" ? (
              <>
                <TouchableOpacity
                  style={styles.outlineButton}
                  onPress={openImagePreview}
                >
                  <Ionicons name="eye" size={24} color={colors.primary} />
                  <Text style={styles.outlineButtonText}>
                    Ver comprobante de pago
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TouchableOpacity onPress={() => setOrderStatus("confirmed")}>
                    <Ionicons
                      name="checkmark-circle"
                      size={30}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setOrderStatus("cancelled")}>
                    <Ionicons
                      name="close-circle"
                      size={30}
                      color={colors.error}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <Text>Respuesta enviada, gracias.</Text>
            )}
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
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
  sectionContainers: {
    gap: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: 14,
  },
  outlineButton: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.primary,
  },
  outlineButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: fonts.primary,
  },
});

export default OrderAdminScreen;
