import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import cross from '../../assets/cross.png'
import OngoingTripPinModal from './ongoingTripPinModal'

const OngoingTripCodeModal = ({ onClose }) => {
  const [pinModalVisible, setPinModalVisible] = useState(false);


  return (
    <View style={styles.modalContainer}>
    <Modal
        transparent={true}
        animationType="slide"
        visible={pinModalVisible}
        onRequestClose={() => {
          setPinModalVisible(!pinModalVisible);
        }}>
        <OngoingTripPinModal onClosePin={() => setPinModalVisible(false)}/>
      </Modal>
      <View style={styles.modalContent}>
        <Text style={styles.tripIdText}>Trip ID: 123456789</Text>
        <TouchableOpacity style={styles.crossIcon} onPress={onClose}>
        <Image source={cross} ></Image>
        </TouchableOpacity>
        <Text style={styles.userNameText}>Randhir Kumar</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.pickupText}>Enter Code For Pick Up</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.submitButton} onPress={onClose}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noShowButton} onPress={() => setPinModalVisible(true)}>
            <Text style={styles.noShowText}>No Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OngoingTripCodeModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 22,
    alignItems: 'center',
    marginTop: '47%'
  },
  tripIdText: {
    fontSize: 12,
    fontFamily: 'poppins',
    color: '#656565',
    fontWeight: '400',
    marginBottom: 14,
  },
  crossIcon: {
    position: 'absolute',
    top: 6,
    right: 10,
  },
  userNameText: {
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#000',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 33,
    borderColor: '#65656580',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  pickupText: {
    fontSize: 11,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  submitButton: {
    width: '47%',
    backgroundColor: '#FA3154',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  submitText: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#FFF',
  },
  noShowButton: {
    width: '47%',
    backgroundColor: '#000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  noShowText: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#FFF',
  },
})
