import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { PaymentsScreenRouteProps } from '../types/PaymentsScreenRouteProps'; 
import AppBar from '@/shared/infrastructure/ui/components/AppBar';
const PaymentsScreen = ({navigation} : PaymentsScreenRouteProps) => {
  const [selectedOption, setSelectedOption] = useState('domicilio');
  const handlePress = () => {
    navigation.navigate('PaymentMethodScreen');
  }
  return (
    
    <SafeAreaView style={styles.container}>
      
      <AppBar
        leftIcon="chevron-back"
        onLeftPress={() => navigation.goBack()}
        title="Pagar Orden"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Entrega</Text>
        <View style={styles.detailsHeader}>
            <Text style={styles.detailsText}>Detalles</Text>
            <Text style={styles.changeText}>Cambiar</Text>
          </View>
        <View style={styles.details}>

          <View style={styles.info}>
            <Text style={styles.infoText}>Martin Santos</Text>
            <Text style={styles.infoText}>Av. central poniente entre 5 y 6 #521</Text>
            <Text style={styles.infoText}>9681191973</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Metodo de entrega.</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedOption('domicilio')}
          >
            <View style={styles.radioCircle}>
              {selectedOption === 'domicilio' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Entrega a domicilio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedOption('establecimiento')}
          >
            <View style={styles.radioCircle}>
              {selectedOption === 'establecimiento' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Entrega en establecimiento</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>$23,000</Text>
        </View>
        <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>Terminar Orden</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 15,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.25,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  changeText: {
    fontSize: 16,
    color: '#00aaff',
  },
  info: {
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop : 225
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
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
  radioGroup: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.25,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0C9488',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0C9488',
  },
  radioText: {
    fontSize: 16,
  },
});

export default PaymentsScreen;
