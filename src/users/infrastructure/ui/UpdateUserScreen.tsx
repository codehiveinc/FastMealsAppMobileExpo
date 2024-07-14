import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '@/shared/infrastructure/ui/components/AppBar';

const UpdateUserScreen = ({ navigation }: { navigation: NavigationProp<any> })=>{

    
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState<string>('');
    
    const handleSubmit = async () => {
        if (!name || !lastName ||!phoneNumber) {
            Alert.alert('Todos los campos son obligatorios.');
            return;
        }   
    }
    const handleChange = (text: string): void => {
        // Permitir solo caracteres numéricos
        const numericValue = text.replace(/[^0-9-]/g, '');
        setPhoneNumber(numericValue);
    
        // Validar si es un número de teléfono o una hora válida
        if (numericValue.length === 0) {
          setError('Este campo no puede estar vacío.');
        } else {
          setError('');
        }
    };
        

    return(
        <SafeAreaView style={styles.container}>
            <AppBar leftIcon='chevron-back' title='Editar mi perfil' />
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

                    <Text style={styles.label}>Apellidos</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Apellido"
                        placeholderTextColor={'#888'}
                        value={lastName}
                        onChangeText={setLastName}
                        
                    />
                    <Text style={styles.label}>Numero Telefonico</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Numero telefonico"
                        placeholderTextColor={'#888'}
                        keyboardType='default'
                        value={phoneNumber}
                        onChangeText={handleChange}
                        
                    />
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
export default UpdateUserScreen;