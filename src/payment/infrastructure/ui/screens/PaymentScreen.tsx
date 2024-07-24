import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PaymentsScreenRouteProps as PaymentScreenRouteProps } from "../types/PaymentsScreenRouteProps";
import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import Button from "@/shared/infrastructure/ui/components/Button";
import MethodOption from "../components/MethodOption";
import { ShippingMethod } from "../enums/shippingMethod.enum";
import { PaymentMethod } from "../enums/paymentMethod.enum";
import * as ImagePicker from "expo-image-picker";
import { BasicModal } from "@/shared/infrastructure/ui/components/BasicModal";

const paymentMethods = [
  {
    id: 1,
    methodName: "Transferencia",
    value: PaymentMethod.TRANSFER,
  },
  {
    id: 2,
    methodName: "Efectivo",
    value: PaymentMethod.CASH,
  },
];

const shippingMethods = [
  {
    id: 1,
    methodName: "Recoger en tienda",
    value: ShippingMethod.PICK_UP,
  },
];

const PaymentScreen = ({ navigation, route }: PaymentScreenRouteProps) => {
  const { totalAmount } = route.params;
  const [selectedMenuOption, setSelectedMenuOption] = useState(0);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    shippingMethod: "pickup",
    paymentMethod: "transfer",
    transferVoucherUri: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to upload an image.");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedOrderOption({
        ...selectedOrderOption,
        transferVoucherUri: result.assets[0].uri,
      });
    }
  };

  const handlePress = () => {
    if (selectedMenuOption === 0) {
      setSelectedMenuOption(1);
    } else {
      setModalMessage("Tu pedido ha sido realizado con éxito");
      setIsModalVisible(true);
    }
  };

  return (
    <BasicLayout>
      <BasicModal
        visible={isModalVisible}
        message={modalMessage}
        onClose={() => {}}
        primaryButtonText="Aceptar"
        onPrimaryButtonPress={() => navigation.navigate("HomeTabScreen")}
      />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <AppBar
            leftIcon="chevron-back"
            onLeftPress={() => navigation.goBack()}
            title="Pago del pedido"
          />
          <View style={styles.deliveryInfoContainer}>
            {selectedMenuOption === 0 && (
              <>
                <Text style={styles.title}>Entrega</Text>
                <View style={styles.sectionContainer}>
                  <View style={styles.sectionHeader}>
                    <Text style={styles.detailsText}>Detalles</Text>
                    <TouchableOpacity>
                      <Text style={styles.changeText}>Cambiar</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.sectionBodyContainer}>
                    <View>
                      <Text style={styles.infoSubText}>
                        Nombre de destinatario:
                      </Text>
                      <Text style={styles.infoText}>Martin Santos</Text>
                    </View>
                    <View>
                      <Text style={styles.infoSubText}>Domicilio:</Text>
                      <Text style={styles.infoText}>
                        Av. central poniente #521
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.infoSubText}>Telefono:</Text>
                      <Text style={styles.infoText}>9681191973</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.detailsText}>Metodo de entrega</Text>
                  <View style={styles.sectionBodyContainer}>
                    {shippingMethods.map((method) => (
                      <MethodOption
                        key={method.id}
                        optionValue={method.value}
                        methodName={method.methodName}
                        isSelected={
                          selectedOrderOption.shippingMethod === method.value
                        }
                        onSelect={(value) =>
                          setSelectedOrderOption({
                            ...selectedOrderOption,
                            shippingMethod: value,
                          })
                        }
                      />
                    ))}
                  </View>
                </View>
              </>
            )}
            {selectedMenuOption === 1 && (
              <>
                <Text style={styles.title}>Pago</Text>
                <View style={styles.sectionContainer}>
                  <Text style={styles.detailsText}>Metodo de pago</Text>
                  <View style={styles.sectionBodyContainer}>
                    {paymentMethods.map((method) => (
                      <MethodOption
                        key={method.id}
                        optionValue={method.value}
                        methodName={method.methodName}
                        isSelected={
                          selectedOrderOption.paymentMethod === method.value
                        }
                        onSelect={(value) =>
                          setSelectedOrderOption({
                            ...selectedOrderOption,
                            paymentMethod: value,
                          })
                        }
                      />
                    ))}
                  </View>
                </View>
                {selectedMenuOption === 1 &&
                  selectedOrderOption.paymentMethod ===
                    PaymentMethod.TRANSFER && (
                    <>
                      <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeader}>
                          <Text style={styles.detailsText}>
                            Datos de la cuenta a transferir
                          </Text>
                        </View>
                        <View style={styles.sectionBodyContainer}>
                          <View>
                            <Text style={styles.infoSubText}>
                              Nombre del titular:
                            </Text>
                            <Text style={styles.infoText}>Martin Santos</Text>
                          </View>
                          <View>
                            <Text style={styles.infoSubText}>
                              Número de tarjeta:
                            </Text>
                            <Text style={styles.infoText}>
                              9274 1648 8492 1234
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeader}>
                          <Text style={styles.detailsText}>
                            Subir comprobante de transferencia
                          </Text>
                        </View>
                        <View style={styles.sectionBodyContainer}>
                          <View style={styles.sectionContainer}>
                            <View>
                              <Text style={styles.infoText}>
                                {selectedOrderOption.transferVoucherUri
                                  ? "Comprobante cargado"
                                  : "No se ha cargado ningun archivo"}
                              </Text>
                            </View>
                            <TouchableOpacity onPress={pickImage}>
                              <Text style={styles.changeText}>
                                {selectedOrderOption.transferVoucherUri
                                  ? "Cambiar"
                                  : "Agregar"}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </>
                  )}
              </>
            )}
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>${totalAmount}</Text>
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
    fontFamily: fonts.primary,
    fontSize: 16,
    fontWeight: "600",
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
  infoSubText: {
    fontFamily: fonts.primary,
    fontSize: 14,
    color: colors.black,
  },
  imagePreviewContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default PaymentScreen;
