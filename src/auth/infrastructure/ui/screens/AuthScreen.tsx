import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView,
  ScrollView,Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface loginFormData {
  email: string;
  password: string;
}

interface registerFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}
const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loginFormData, setLoginFomrData] = useState<loginFormData>({ email: '', password: '' });
  const [registerFormData, setRegisterFormData] = useState<registerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
  
  

  const handleTabPress = (index:number) => {
    setActiveTab(index);
  };

   
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}></Text>
        </View>
        <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
        <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabPress(0)}>
            <Text style={[styles.tab, activeTab === 0 && styles.activeTab]}>Inicia Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress(1)}>
            <Text style={[styles.tab, activeTab === 1 && styles.activeTab]}>Regístrate</Text>
          </TouchableOpacity>
        </View>
        </View>
        {activeTab === 0 && (
          <View>
      <Text style={styles.adress}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Dosamarvis@gmail.com"
        placeholderTextColor="#000000"
        value={loginFormData.email}
        onChange={(e) => setLoginFomrData({ ...loginFormData, email: e.nativeEvent.text })}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.adress}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="* * * * * * * * "
        placeholderTextColor="#000000"
        value={loginFormData.password}
        onChange={(e) => setLoginFomrData({ ...loginFormData, password: e.nativeEvent.text })}
        secureTextEntry
      />
      <View style={styles.forgotContent}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot passcode?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
          </View>
        )}
        {activeTab === 1 && (
    <KeyboardAvoidingView style={{ flex: 1,width:'100%', backgroundColor:'Red'}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView >
    <View style={styles.ScrollInput}>
    <Text style={styles.adress}>First name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#000000"
        value={registerFormData.firstName}
        onChange={(e) => setRegisterFormData({ ...registerFormData, firstName: e.nativeEvent.text })}
        keyboardType="default"
        autoCapitalize="none"
      />
          <Text style={styles.adress}>Last name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor="#000000"
        value={registerFormData.lastName}
        onChange={(e) => setRegisterFormData({ ...registerFormData, lastName: e.nativeEvent.text })}
        keyboardType="default"
        autoCapitalize="none"
      />
          <Text style={styles.adress}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Dosamarvis@gmail.com"
        placeholderTextColor="#000000"
        value={registerFormData.email}
        onChange={(e) => setRegisterFormData({ ...registerFormData, email: e.nativeEvent.text })}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.adress}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="* * * * * * * * "
        placeholderTextColor="#000000"
        value={registerFormData.password}
        onChange={(e) => setRegisterFormData({ ...registerFormData, password: e.nativeEvent.text })}
        secureTextEntry
      />
      <Text style={styles.adress}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="xxx-xxxx-xxxx"
        placeholderTextColor="#000000"
        value={registerFormData.phone}
        onChange={(e) => setRegisterFormData({ ...registerFormData, phone: e.nativeEvent.text })}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </KeyboardAvoidingView>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
    backgroundColor: 'white',
    paddingTop: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    width:'100%'
  },
  iconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
    marginBottom: 10,
  },
  icon: {
    fontSize: 40,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    fontSize: 18,
    marginHorizontal: 50,
    marginTop: 30,
    paddingBottom: 5,
    color: '#888',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'green',
    color: 'black',
  },
  input: {
    width: 314,
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginTop: 5,
    marginBottom: 20,
    fontWeight: '500',
    fontSize:17
  },
  forgotPassword: {
    color: '#000E21',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 17,
  },
  loginButton: {
    width: 314,
    padding: 24,
    backgroundColor: '#0C9488',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '20%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 17,
  },
  adress: {
    width: '80%',
    marginTop: '5%',
    paddingLeft: 2,
    color: '#888',
    fontSize: 15,
  },
  forgotContent: {
    width: '80%',
    marginTop: 15,
  },
  tabTex:{
    fontSize:18,
    paddingHorizontal:8,
    marginBottom:10
  },
  ScrollInput:{
    flex: 1,
    alignItems:'center',
    paddingBottom:25

  }
});

export default AuthScreen;