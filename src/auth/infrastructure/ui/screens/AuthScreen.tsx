import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function LoginScreen(){
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}></Text>
        </View>
        <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
        <View style={styles.tabContainer}>
          <Text style={[styles.tab, styles.activeTab]}>Inicia Sesion</Text>
          <Text style={styles.tab}>Registrate</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems:'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
    backgroundColor:'white',
    paddingTop:120,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 5,
    shadowColor: '#000',

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
    marginTop:5,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    fontSize: 18,
    marginHorizontal: 50,
    marginTop:30,
    paddingBottom: 5,
    color: '#888',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    color: 'black',
  },
  input: {
    width: 314,
    padding: 5,
    borderBottomColor:'black',
    borderBottomWidth:0.5,
    marginTop:5,
    marginBottom: 20,
    fontWeight:'500'
  },
  forgotPassword: {
    color: '#000E21',
    marginBottom: 20,
    fontWeight:'bold',
    fontSize:17,

  },
  loginButton: {
    width: 314,
    padding: 24,
    backgroundColor: '#0C9488',
    borderRadius: 30,
    alignItems: 'center',
    marginTop:'20%'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 17,
  },
  adress:{
    width:'80%',
    marginTop:'5%',
    paddingLeft:2,
    color: '#888',
    fontSize:15
  },
  forgotContent:{
    width:'80%',
    marginTop:15,
  }
});

export default AuthScreen;
