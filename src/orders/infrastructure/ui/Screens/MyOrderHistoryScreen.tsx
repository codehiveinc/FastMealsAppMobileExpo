import AppBar from "@/shared/infrastructure/ui/components/AppBar";
import BasicLayout from "@/shared/infrastructure/ui/layouts/BasicLayout";
import { MyOrderHistoryScreenRouteProps } from "../types/OrderScreenRouteProps";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import OrderItem from "../components/OrderItem";
import { TextField } from "@/shared/infrastructure/ui/components/TextField";
import { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { validateText } from "@/shared/infrastructure/ui/validations/validations";

const oderItems = [
  {
    id: 1,
    productName: "Hamburguesa",
    productPrice: 50.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 2,
  },
  {
    id: 2,
    productName: "Papas",
    productPrice: 25.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 1,
  },
  {
    id: 3,
    productName: "Refresco",
    productPrice: 25.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 1,
  },
  {
    id: 4,
    productName: "Helado",
    productPrice: 25.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 1,
  },
  {
    id: 5,
    productName: "Hamburguesa",
    productPrice: 50.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 2,
  },
  {
    id: 6,
    productName: "Papas",
    productPrice: 25.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 1,
  },
  {
    id: 7,
    productName: "Refresco",
    productPrice: 25.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 1,
  },
  {
    id: 8,
    productName: "Helado",
    productPrice: 25.0,
    productImage: "https://via.placeholder.com/150",
    quantityOrderItem: 1,
  },
];

const MyOrderHistoryScreen = ({
  navigation,
}: MyOrderHistoryScreenRouteProps) => {
  const [isFeedbackTextFieldVisible, setIsFeedbackVisible] = useState(true);
  const [feedbackFormData, setFeedbackFormData] = useState({
    content: "",
  });
  const [errors, setErrors] = useState({
    content: "",
  });

  const handleFeedbackChange = (value: string) => {
    setFeedbackFormData({ ...feedbackFormData, content: value });
    setErrors((prev) => ({
      ...prev,
      content: validateText(value, "contenido"),
    }));
  };

  const handleSubmit = useCallback(() => {
    const contentError = validateText(feedbackFormData.content, "contenido");

    setErrors({
      content: contentError,
    });

    if (!contentError) {
      setIsFeedbackVisible(false);
    }
  }, [feedbackFormData]);

  const renderOrderItems = () => {
    return oderItems.map((orderItem) => {
      return (
        <OrderItem
          key={orderItem.id}
          productName={orderItem.productName}
          productPrice={orderItem.productPrice}
          productImage={orderItem.productImage}
          quantityOrderItem={orderItem.quantityOrderItem}
        />
      );
    });
  };

  return (
    <BasicLayout>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Detalle de pedido"
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Detalles</Text>
          <View style={styles.infoContainer}>
            <Image
              style={styles.restaurantImg}
              source={{
                uri: "https://via.placeholder.com/150",
              }}
            />
            <View style={styles.infoTextContainer}>
              <Text>Restaurante: Burger King</Text>
              <Text>Estado: Entregado</Text>
              <Text>Total: $100.00</Text>
              <Text>Fecha: 12/12/2021</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Reseña</Text>
          <View style={styles.infoContainer}>
            <View style={styles.feedbackFormContainer}>
              {isFeedbackTextFieldVisible ? (
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <TextField
                    label="Reseña"
                    placeholder="Escribe tu reseña"
                    value={feedbackFormData.content}
                    width="90%"
                    onChange={handleFeedbackChange}
                    errorMessage={errors.content}
                  />
                  <TouchableOpacity
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "10%",
                      borderRadius: 20,
                    }}
                    onPress={handleSubmit}
                  >
                    <Ionicons name="send" size={24} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              ) : (
                <Text>{feedbackFormData.content}</Text>
              )}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Productos</Text>
          <View style={[styles.infoContainer, styles.scrollContainer]}>
            <ScrollView contentContainerStyle={styles.orderItemsContainer}>
              {renderOrderItems()}
            </ScrollView>
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
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollContainer: {
    height: "60%",
  },
  orderItemsContainer: {
    gap: 15,
  },
  restaurantImg: {
    height: "auto",
    aspectRatio: 1,
    borderRadius: 20,
  },
  infoTextContainer: {
    width: "100%",
    gap: 3,
  },
  feedbackFormContainer: {
    width: "100%",
  },
});

export default MyOrderHistoryScreen;
