import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import location from '../assets/location.png';
import pushpin from '../assets/pushpin.png';
import OngoingTripsCard from '../components/cards/ongoingTripsCard';
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';

const OngoingTrips = () => {
  return (
    <View style={styles.mainContainer}>
      <TopBar/>
      <View style={styles.container}>
        <View style={styles.tripInfoView}>
          <View style={styles.route}>
            <View style={styles.pushpinView}>
              <Image source={pushpin} style={styles.pushpinIcon}></Image>
              <Text style={styles.pushpinText}>Sector 44...</Text>
            </View>
            <View style={styles.dashNTripId}>
              <Text style={styles.tripId}>Trip ID: 12356789</Text>
              <View style={styles.dashLine}></View>
            </View>
            <View style={styles.locationView}>
              <Image source={location} style={styles.locationIcon}></Image>
              <Text style={styles.locationText}>GGNGETD001</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardView}>
          <OngoingTripsCard />
        </View>
        <View style={styles.cardView}>
          <OngoingTripsCard />
        </View>
        <View style={styles.cardView}>
          <OngoingTripsCard />
        </View>
        <View style={styles.cardView}>
          <OngoingTripsCard />
        </View>
      </View>
      <BottomBar />
    </View>
  );
};

export default OngoingTrips;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: '100%',
  },
  cardView: {
    width: '90%',
    marginBottom: 20,
  },
  tripInfoView: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
  route: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 6,
    // backgroundColor: 'yellow'
  },
  pushpinView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pushpinIcon: {},
  pushpinText: {
    fontSize: 9.5,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#000',
    marginLeft: 5,
  },
  dashNTripId: {},
  tripId: {
    fontSize: 10,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#656565',
    textAlign: 'center',
    margin: 0,
  },
  dashLine: {
    width: 230,
    height: 7,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#CCC',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  locationIcon: {},
  locationText: {
    fontSize: 9,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#000',
  },
});
