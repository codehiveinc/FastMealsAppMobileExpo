import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PaymentMethodScreenRouteProps } from '../types/PaymentsScreenRouteProps';
import AppBar from '@/shared/infrastructure/ui/components/AppBar';
import { launchImageLibrary } from 'react-native-image-picker';
const PaymentMethodScreen = ({navigation}: PaymentMethodScreenRouteProps) => {
    const [selectedOption, setSelectedOption] = useState('transferencia');
    const [modalVisible, setModalVisible] = useState(false);
    const [cashModalVisible, setCashModalVisible] = useState(false);
    const handleTerminarPress = () => {
      if (selectedOption === 'transferencia') {
        setModalVisible(true);
      }
      else if (selectedOption === 'efectivo') {
        setCashModalVisible(true);
      }
      
    };

    const setHandlePress = () => {
        navigation.navigate('HomeTabScreen');
    }

    const openGallery = () => {
        const options = {
          mediaType: 'photo' as const,
          quality: 1 as const,
        };
    
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
          } else {
            console.log('ImagePicker Response: ', response);
            // Handle the selected image here (e.g., upload it to the server)
          }
        });
      };
  

  return (
    <SafeAreaView style={styles.container}>
        <AppBar
            leftIcon="chevron-back"
            onLeftPress={() => navigation.goBack()}
            title="Pagar Orden"
        />
      <View style={styles.content}>
        <Text style={styles.title}>Método de pago</Text>
        <View style={styles.paymentOptions}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedOption('transferencia')}
          >
            <View style={styles.radioCircle}>
              {selectedOption === 'transferencia' && <View style={styles.selectedRb} />}
            </View>
            <Icon name="bank" size={20} color="#FFA500" style={styles.icon} />
            <Text style={styles.radioText}>Transferencia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedOption('efectivo')}
          >
            <View style={styles.radioCircle}>
              {selectedOption === 'efectivo' && <View style={styles.selectedRb} />}
            </View>
            <Icon name="money" size={20} color="#FF1493" style={styles.icon} />
            <Text style={styles.radioText}>Efectivo</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Cuenta</Text>
        <View style={styles.details}>
          <Text style={styles.infoText}>Nombre del titular</Text>
          <Text style={styles.valueText}>Jesus Rodriguez</Text>
          <Text style={styles.infoText}>Cuenta a transferir</Text>
          <Text style={styles.valueText}>4152313649082273</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>$23,000</Text>
        </View>
        <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleTerminarPress()}>
          <Text style={styles.buttonText}>Terminar orden</Text>
        </TouchableOpacity>
      </View>

    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sube tu recibo de transferencia</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={openGallery}>
              <Text style={styles.uploadButtonText}>Agregar recibo</Text>
              <Icon name="paperclip" size={20} color="#00aaff" style={styles.uploadIcon} />
            </TouchableOpacity>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Subir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={cashModalVisible}
        onRequestClose={() => setCashModalVisible(false)}
      >
        <View style={styles.modalContainer2}>
          <View style={styles.modalContent2}>
            <Text style={styles.modalTitle2}>Tu pedido llegara pronto</Text>
            
              <Text style={styles.uploadButtonText2}>Gracias por tu compra</Text>
            
            
            <TouchableOpacity style={styles.submitButton2} onPress={() => setHandlePress()}>
              <Text style={styles.submitButtonText2}>Ir al menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop : 40
  },
  paymentOptions: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
  icon: {
    marginRight: 10,
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  valueText: {
    fontSize: 16,
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 200
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0C9488',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#0C9488',
    marginRight: 10,
    
  },
  uploadButtonText2: {
    fontSize: 16,
    color: '#0C9488',
    marginRight: 10,
    paddingTop : 20,
    paddingBottom : 30
  },
  uploadIcon: {
    color: '#0C9488',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#888',
    paddingTop : 9,
    alignItems: 'center',
    marginRight: 20,
  },
  submitButton: {
    backgroundColor: '#0C9488',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  submitButton2: {
    backgroundColor: '#0C9488',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  submitButtonText2: {
    fontSize: 16,
    color: '#fff',
  },
  modalContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent2: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0C9488',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default PaymentMethodScreen;
