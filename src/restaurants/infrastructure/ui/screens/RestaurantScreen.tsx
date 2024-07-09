import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from '../components/ProductItem';
import { RestaurantScreenRouteProps } from '../types/RestaurantsScreensRouteProps';

const images = {
    veggieTomatoMix: require('@assets/images/veggie-tomato-mix.png'),

  };

const productos = [
  // Add your product list here
  {
    id: 1,
    title: 'Veggie tomato mix',
    price: 'N1,900',
    image: '@assets/images/MealImage.png',
  },
  {
    id: 2,
    title: 'Egg and cucumber',
    price: 'N1,900',
    image: 'https://via.placeholder.com/100',
  },
  // ... other products
];

const RestaurantScreen = ({ navigation }: RestaurantScreenRouteProps) => {
  const [search, setSearch] = useState('');

  const filteredProductos = productos.filter((producto) =>
    producto.title.toLowerCase().includes(search.toLowerCase())
  );
  const handlePressDetail = () => {
    navigation.navigate('MealDetailScreen');
  }

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name='chevron-back' size={30} />
        </TouchableOpacity>
        <Text style={styles.titleTextHeader}>Menú</Text>
      </View>

      <View style={styles.cardContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
          style={styles.image}
        />
        <View>
          <Text style={styles.cardTitle}>La casa de las pizzas</Text>
          <Text style={styles.cardText}>Dirección: Av. Central C.P. 29049</Text>
          <Text style={styles.cardText}>Horario: 10:00 - 18:00</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Productos</Text>
        <ScrollView
          contentContainerStyle={styles.productsContainer}
          showsVerticalScrollIndicator={false}
        >
          {filteredProductos.map((producto) => (
            <ProductItem onPress={handlePressDetail}
              key={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
            />
          ))}
        </ScrollView>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: '7%',
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: '#EEEEEE',
    width: '80%',
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 25,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation : 5,
    shadowOpacity: 0.9
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  },
  contentContainer: {
    width: '95%',
    height: '70%',
    alignItems: 'center',
    paddingTop: 20,
    gap: 20,
  },
  titleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
  },  
  titleTextHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
  },
  productsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    borderRadius: 30,

  },

});

export default RestaurantScreen;
