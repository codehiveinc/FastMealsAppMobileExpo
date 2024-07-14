import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '@/shared/infrastructure/ui/components/AppBar';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateRestaurantScreen = ({navigation}: {navigation: NavigationProp<any>})=>{

    const [name, setName]= useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [openingTime, setOpeningTime] = useState<string>('')
    const [closingTime, setClosingTime] = useState<string>('')
    const [values, setValues] = useState<{ [key: string]: string }>({
        openingTime: '',
        closingTime: '',
      });
      const [errors, setErrors] = useState<{ [key: string]: string }>({
        openingTime: '',
        closingTime: '',
      });
    

    const handleSubmit = async() =>{
        if(!name || !location || !email || !openingTime || !closingTime){
            Alert.alert('Todos los campos son obligatorios')
            return;
        }
    }
    const handleChange = (name: string, text: string): void => {
        const updatedValues = { ...values };
        let error = '';
    
        const numericValue = text.replace(/[^0-9:]/g, '');
        updatedValues[name] = numericValue;
    
        const timeParts = numericValue.split(':');
        const hours = parseInt(timeParts[0], 10);
        const minutes = timeParts.length > 1 ? parseInt(timeParts[1], 10) : 0;
    
        if (numericValue.length === 0) {
          error = 'Este campo no puede estar vacío.';
        } else if (
          timeParts.length > 2 ||
          isNaN(hours) ||
          hours < 0 ||
          hours > 23 ||
          (timeParts.length > 1 && (isNaN(minutes) || minutes < 0 || minutes > 59))
        ) {
          error = 'Ingrese una hora válida (HH:MM).';
        }
    
        setValues(updatedValues);
        setErrors({ ...errors, [name]: error });
      };
    /*const handleTimeChange = (time) =>{
        setShowTimePicker(false);
        if(time){
            const selectedMoment = moment(time, 'HH:mm');
            const [startHour, endHour] = 
        }
    }
    */
    return(
        <SafeAreaView style={styles.container}>
            <AppBar leftIcon='chevron-back' title='Crear restaurante' />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.form}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        placeholderTextColor={'#888'}
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.label}>Direccion</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Direccion"
                        placeholderTextColor={'#888'}
                        value={location}
                        onChangeText={setLocation}
                        
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={'#888'}
                        value={email}
                        onChangeText={setEmail}
                        
                    />
                    <Text style={styles.label}>Hora de apertura</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Formato 24hrs"
                        placeholderTextColor={'#888'}
                        value={values.openingTime}
                        onChangeText={(text) => handleChange('openingTime', text)}
                        keyboardType='default'
                    />
                    {errors.openingTime ? <Text style={styles.errorText}>{errors.openingTime}</Text> : null}
                    <Text style={styles.label}>Hora de cierre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Formato 24hrs"
                        placeholderTextColor={'#888'}
                        value={values.closingTime}
                        onChangeText={(text) => handleChange('closingTime', text)}
                        keyboardType='default'
                    />
                    {errors.closingTime ? <Text style={styles.errorText}>{errors.closingTime}</Text> : null}
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                            <Text style={styles.saveButtonText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F7',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    form: {
        borderRadius: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingVertical: 20,
        shadowColor: '#444',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10, // Reduce el espacio inferior
        color: '#555',
    },
    input: {
        paddingVertical: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginBottom: 25, // Reduce el espacio inferior
        fontWeight: '500',
        fontSize: 17
    },
    inputArea: {
        paddingTop: 2,
    },
    textArea: {
        height: 42,
    },
    errorText: {
        color: 'red',
        marginTop:-10,
    },
    imageButton: {
        height: 200,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#fff',
    },
    imageButtonText: {
        fontSize: 16,
        color: '#888',
    },
    image: {
        width: '80%',
        height: '80%',
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    cancelButton: {
        backgroundColor:'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignContent:'center'
    },
    cancelButtonText: {
        fontSize: 18,
        color: '#888',
        fontWeight: '700',
    },
    saveButton: {
        backgroundColor: '#439288',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    saveButtonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700'
    },
});


export default CreateRestaurantScreen;