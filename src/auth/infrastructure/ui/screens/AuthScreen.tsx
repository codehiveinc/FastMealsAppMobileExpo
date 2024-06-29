import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView,
  ScrollView,Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}></Text>
        </View>
        <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabTex}>Inicia Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.tab}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.adress}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Dosamarvis@gmail.com"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.adress}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="* * * * * * * * "
        placeholderTextColor="#000000"
        value={password}
        onChangeText={setPassword}
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
  );
};

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}></Text>
        </View>
        <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.tab}>Inicia Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabTex]}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    <KeyboardAvoidingView style={{ flex: 1,width:'100%' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView >
    <View style={styles.ScrollInput}>
    <Text style={styles.adress}>First name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#000000"
        value={name}
        onChangeText={setName}
        keyboardType="default"
        autoCapitalize="none"
      />
          <Text style={styles.adress}>Last name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor="#000000"
        value={lastName}
        onChangeText={setLastName}
        keyboardType="default"
        autoCapitalize="none"
      />
          <Text style={styles.adress}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Dosamarvis@gmail.com"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.adress}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="* * * * * * * * "
        placeholderTextColor="#000000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.adress}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="xxx-xxxx-xxxx"
        placeholderTextColor="#000000"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </View>
  );
};

const AuthScreen: React.FC = () => {
  return (
    <Stack.Navigator  initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

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
    borderBottomColor: '#0C9488',
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