import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import location from '../../assets/location.png';
import pushpin from '../../assets/pushpin.png';

const RequestedTripCard = ({onClick}) => {
  return (
    <View>
      <View style={styles.cards}>
        <View style={styles.row}>
          <Text style={styles.tripID}>Trip ID: 12356789</Text>
          <Text style={styles.tripDate}>Monday, Dec 4, 2024</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.tripInfo}>GETS-111</Text>
            <Text style={styles.tripInfo}>DL-QWEP-4473</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.tripTime}>IN, 10:30</Text>
            <Text style={styles.vehicleType}>3/4s</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.tripBegin}>Sector 137, Noida...</Text>
          <Text style={styles.tripDestination}>GGNGETD001</Text>
        </View>
        <View style={styles.route}>
          <Image source={pushpin} style={styles.pushpinIcon}></Image>
          <View style={styles.dashNCircles}>
            <View style={styles.dashLine}></View>
            <View style={styles.routeCircle}></View>
          </View>
          <View style={styles.dashNCircles}>
            <View style={styles.dashLine}></View>
            <View style={styles.routeCircle}></View>
          </View>
          <View style={styles.dashNCircles}>
            <View style={styles.dashLine}></View>
            <View style={styles.routeCircle}></View>
          </View>
          <View style={styles.dashNCircles}>
            <View style={styles.dashLine}></View>
            <View style={styles.routeCircle}></View>
          </View>
          <View style={styles.dashNCircles}>
            <View style={styles.dashLine}></View>
          </View>
          <Image source={location} style={styles.locationIcon}></Image>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.acceptButton} >
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequestedTripCard;

const styles = StyleSheet.create({
  cards: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    alignItems: 'center',
  },
  col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tripID: {
    fontSize: 12,
    fontFamily: 'poppins',
    color: '#000',
    fontWeight: '400',
  },
  tripDate: {
    fontSize: 12,
    fontFamily: 'poppins',
    color: '#000',
    fontWeight: '400',
  },
  tripInfo: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#656565',
    marginRight: 10,
  },
  tripTime: {
    fontSize: 10,
    fontFamily: 'poppins',
    backgroundColor: '#000',
    color: 'white',
    marginRight: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  vehicleType: {
    fontSize: 10,
    fontFamily: 'poppins',
    backgroundColor: '#000',
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  tripBegin: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#656565',
    marginTop: 10,
  },
  tripDestination: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#656565',
    marginTop: 10,
  },
  route: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 22,
    // backgroundColor: 'yellow'
  },
  pushpinIcon: {},
  dashNCircles: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 2
  },
  dashLine: {
    width: 56.7,
    height: 20,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
  },
  routeCircle: {
    borderWidth: 4.5,
    borderStyle: 'solid',
    borderColor: '#FFC6C6',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: 'absolute',
    right: 0,
    bottom: -4,
  },
  locationIcon: {},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  acceptButton: {
    width: '47%',
    backgroundColor: '#FA3154',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
  },
  acceptText: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#FFF',
  },
  cancelButton: {
    width: '47%',
    backgroundColor: '#000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
  },
  cancelText: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#FFF',
  },
});
