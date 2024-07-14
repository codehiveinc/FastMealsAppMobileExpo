import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

import MealImage from 'assets/images/MealImage.png'
import AppBar from '@/shared/infrastructure/ui/components/AppBar';
import { EditMealScreenRouteProps } from '../types/UsersScreensRouteProps';

const EditMealScreen = ({ navigation }: EditMealScreenRouteProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeletePress = () => {
    setModalVisible(true);
  };

  const handleCancelPress = () => {
    setModalVisible(false);
  };

  const handleConfirmDeletePress = () => {
    // Aquí puedes manejar la lógica de eliminación del producto
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => { navigation.navigate('MyRestaurantScreen') }}
        title="Mi Restaurante"
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={MealImage} // reemplaza con la URL de tu imagen
        />
        <Text style={styles.title}>Veggie tomato mix</Text>
        <Text style={styles.price}>N1,900</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Información de entrega</Text>
          <Text style={styles.infoText}>Entregas de Lunes a Domingo de 10 am a 10 pm</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Política de retorno</Text>
          <Text style={styles.infoText}>Si el producto se encuentra en mal estado se aplica la política de retorno</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleDeletePress}>
          <Text style={styles.buttonText}>Eliminar Producto</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirmación de eliminación</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalCancelButton} onPress={handleCancelPress}>
                <Text style={styles.modalCancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalDeleteButton} onPress={handleConfirmDeletePress}>
                <Text style={styles.modalDeleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 75,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 10,
    width: '100%',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'justify',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#EF4444',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    marginTop: 240,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalCancelButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  modalCancelButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  modalDeleteButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  modalDeleteButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EditMealScreen;
