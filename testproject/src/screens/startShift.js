import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const StartShift = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <View style={styles.profilePicBg}></View>
          <View style={styles.profileInfo}>
            <Text style={styles.welcometext}>Welcome Back!</Text>
            <Text style={styles.nameText}>Vivek Singh</Text>
          </View>
        </View>
        <Text style={styles.startShiftText}>Start your shift for the day</Text>
        <TouchableOpacity
          style={styles.goLiveButton}
          onPress={() => navigation.navigate('ongoingTrip')}>
          <Text style={styles.goLiveText}>Go Live</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartShift;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'flext-start',
    alignItems: 'center',
    marginTop: '55%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 80,
  },
  profilePicBg: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: '#D7D7D7',
  },
  profileInfo: {
    marginLeft: 25,
  },
  welcometext: {
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '300',
    color: '#000000',
  },
  nameText: {
    fontSize: 22,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#000',
  },
  startShiftText: {
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '300',
    color: '#000',
    marginBottom: 80,
  },
  goLiveButton: {
    height: 64,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 140,
  },
  goLiveText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: '600',
  },
});
