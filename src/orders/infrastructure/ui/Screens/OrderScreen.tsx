import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { OrderScreenRouteProps } from '../types/OrderScreenRouteProps';
import AppBar from '@/shared/infrastructure/ui/components/AppBar';

const OrderScreen = ({ navigation }: OrderScreenRouteProps) => {
  const handlePress = () => {
    navigation.navigate('PaymentsScreen');
  }
  const products = [
    { id: '1', name: 'Hamburguesa doble queso', price: '$100.00', image: 'https://example.com/hamburguesa.png' },
    { id: '2', name: 'Hamburguesa doble queso', price: '$100.00', image: 'https://example.com/hamburguesa.png' },
    { id: '3', name: 'Hamburguesa doble queso', price: '$100.00', image: 'https://example.com/hamburguesa.png' },
    { id: '4', name: 'Hamburguesa doble queso', price: '$100.00', image: 'https://example.com/hamburguesa.png' },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Mis Ordenes"
      />
      
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>Terminar orden</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#f5f5f5',
  },
  bottomContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  button: {
    backgroundColor: "#0C9488",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    width: "70%",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight : "bold"
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#0C9488',
    marginTop: 4,
  },
  arrow: {
    fontSize: 20,
    color: '#777',
  },
});

export default OrderScreen;
