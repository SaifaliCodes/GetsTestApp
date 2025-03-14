import React from 'react';
import {View, Image, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../assets/logo.png';

const Login = ({navigation}) => {
  const [officeId, setOfficeId] = React.useState('');
  const [licenseNo, setLicenseNo] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={setOfficeId}
        value={officeId}
        placeholder="Enter Your Office ID"
        placeholderTextColor="#EF8C8C"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLicenseNo}
        value={licenseNo}
        placeholder="Enter Your Driving License No."
        placeholderTextColor="#EF8C8C"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('upcomingTrip')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
  },
  logo: {
    position: 'absolute',
    top: 150,
  },
  input: {
    width: '90%',
    height: 64,
    fontSize: 16,
    fontFamily: 'poppins',
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingTop: 17,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 12,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    elevation: 5,
  },
  button: {
    width: '90%',
    height: 64,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: '600',
  },
});

export default Login;
