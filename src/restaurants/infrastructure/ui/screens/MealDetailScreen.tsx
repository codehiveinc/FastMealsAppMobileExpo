import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import MealImage from 'assets/images/MealImage.png'
import AppBar from '@/shared/infrastructure/ui/components/AppBar';
import { MealDetailScreenRouteProps } from '@/restaurants/infrastructure/ui/types/RestaurantsScreensRouteProps';
const MealDetailScreen = ({ navigation }:MealDetailScreenRouteProps ) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar 
        leftIcon="LeftIcon"
        onLeftPress={() => navigation.goBack()}
        title='Detalles del platillo'
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Añadir al carro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 30 
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
    backgroundColor: '#0C9488',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    marginTop: 70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealDetailScreen;
