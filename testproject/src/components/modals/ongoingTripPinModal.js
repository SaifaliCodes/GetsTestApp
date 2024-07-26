import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import cross from '../../assets/cross.png';

const OngoingTripPinModal = ({ onClosePin }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.tripIdText}>Trip ID: 123456789</Text>
        <TouchableOpacity style={styles.crossIcon} onPress={onClosePin}>
          <Image source={cross}></Image>
        </TouchableOpacity>
        <Text style={styles.pinText}>Enter Your PIN To Confirm ?</Text>
        <TextInput style={styles.input} placeholder="" />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.yesButton} onPress={onClosePin}>
            <Text style={styles.yesText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noButton} onPress={onClosePin}>
            <Text style={styles.noText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OngoingTripPinModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 22,
    alignItems: 'center',
    marginTop: '47%',
  },
  tripIdText: {
    fontSize: 12,
    fontFamily: 'poppins',
    color: '#656565',
    fontWeight: '400',
    marginBottom: 20,
  },
  crossIcon: {
    position: 'absolute',
    top: 6,
    right: 10,
  },
  pinText: {
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#000',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 33,
    borderColor: '#65656580',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 35,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  yesButton: {
    width: '47%',
    backgroundColor: '#FA3154',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  yesText: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#FFF',
  },
  noButton: {
    width: '47%',
    backgroundColor: '#000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  noText: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#FFF',
  },
});
