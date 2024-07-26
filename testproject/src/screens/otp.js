import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import logo from '../assets/logo.png';

const Login = ({ navigation }) => {
  const [otp, setOtp] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>OTP sent to your registered email ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={setOtp}
        value={otp}
        placeholder="Enter OTP"
        placeholderTextColor="#EF8C8C"
      />
      <TouchableOpacity
        style={styles.resendOtpBtn}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.resendOtpText}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('upcomingTrip')}>
        <Text style={styles.buttonText}>Log In</Text>
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
  text: {
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#303030',
    marginTop: 20,
    marginBottom: 20,
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
  resendOtpBtn: {
    width: '40%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  resendOtpText: {
    color: '#080808',
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '400',
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
