import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '@/shared/infrastructure/ui/components/AppBar';

const CreateMealScreen = ({ navigation }: { navigation: NavigationProp<any> })=>{

    
    const [name, setName] = useState('')
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<string|null>(null);

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1

        });
        if(!result.canceled){
            setImage(result.assets[0].uri);

        }
    }
    const handleSubmit = async () => {
        if (!name || !price ||!description || !image ) {
            Alert.alert('Todos los campos son obligatorios.');
            return;
        }   
    }

    return(
        <SafeAreaView style={styles.container}>
            <AppBar leftIcon='chevron-back' title='Crear producto' />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.form}>
                    <Text style={styles.label}>Nombre del producto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nuevo nombre"
                        placeholderTextColor={'#888'}
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.label}>Precio del producto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nuevo precio"
                        placeholderTextColor={'#888'}
                        keyboardType='numeric'
                    />

                    <Text style={styles.label}>Descripción</Text>
                    <TextInput
                        style={[styles.input, styles.textArea, styles.inputArea]}
                        placeholder="Nueva Descripción"
                        multiline
                        numberOfLines={4}
                        placeholderTextColor={'#888'}
                        value={description}
                        onChangeText={setDescription}
                        textAlignVertical='top'
                    />

                    <Text style={styles.label}>Imagen</Text>
                    <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.image} />
                        ) : (
                            <Text style={styles.imageButtonText}>Agregar Imagen</Text>
                        )}
                    </TouchableOpacity>

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
export default CreateMealScreen;