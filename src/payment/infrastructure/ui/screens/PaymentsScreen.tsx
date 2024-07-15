import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PaymentsScreenRouteProps } from "../types/PaymentsScreenRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import Button from "@/shared/infrastructure/ui/components/Button";
import ShippingMethodOption from "../components/ShippingMethodOption";
import { ShippingMethod } from "../enums/shippingMethod.enum";

const PaymentsScreen = ({ navigation }: PaymentsScreenRouteProps) => {
  const [selectedMethodOption, setSelectedMethodOption] =
    useState<ShippingMethod>(ShippingMethod.delivery);
  const handlePress = () => {
    navigation.navigate("PaymentMethodScreen");
  };
  return (
    <BasicLayout>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <AppBar
            leftIcon="chevron-back"
            onLeftPress={() => navigation.goBack()}
            title="Pago del pedido"
          />
          <View style={styles.deliveryInfoContainer}>
            <Text style={styles.title}>Entrega</Text>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.detailsText}>Detalles</Text>
                <TouchableOpacity>
                  <Text style={styles.changeText}>Cambiar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBodyContainer}>
                <Text style={styles.infoText}>Nombre: Martin Santos</Text>
                <Text style={styles.infoText}>
                  Direccion: Av. central poniente entre 5 y 6 #521
                </Text>
                <Text style={styles.infoText}>
                  Núm. de telefono: 9681191973
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.detailsText}>Metodo de entrega</Text>
              <View style={styles.sectionBodyContainer}>
                <ShippingMethodOption
                  optionValue={ShippingMethod.delivery}
                  method="Entrega a domicilio"
                  isSelected={selectedMethodOption === ShippingMethod.delivery}
                  onSelect={(value) => setSelectedMethodOption(value)}
                />
                <ShippingMethodOption
                  optionValue={ShippingMethod.pickup}
                  method="Recoger en tienda"
                  isSelected={selectedMethodOption === ShippingMethod.pickup}
                  onSelect={(value) => setSelectedMethodOption(value)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>$23,000</Text>
          </View>
          <Button
            text="Continuar"
            handlePress={() => handlePress()}
            backgroundColor={colors.primary}
            textColor={colors.white}
            width={"100%"}
          />
        </View>
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  topSection: {},
  bottomSection: {
    gap: 20,
    justifyContent: "flex-end",
  },
  deliveryInfoContainer: {
    paddingTop: 20,
    gap: 30,
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: 34,
    fontWeight: "400",
  },
  sectionContainer: {
    gap: 15,
  },
  sectionBodyContainer: {
    gap: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsText: {
    fontFamily: fonts.primary,
    fontSize: 16,
  },
  changeText: {
    fontFamily: fonts.primary,
    fontSize: 16,
    color: colors.primary,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    fontFamily: fonts.primary,
    fontSize: 18,
  },
  totalAmount: {
    fontFamily: fonts.primary,
    fontSize: 24,
    fontWeight: "600",
  },
});

export default PaymentsScreen;
