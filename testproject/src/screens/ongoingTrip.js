import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import location from '../assets/location.png';
import pushpin from '../assets/pushpin.png';
import OngoingTripCard from '../components/cards/ongoingTripCard';
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';

const OngoingTrip = ({navigation}) => {

  const [flag, setFlag] = useState(false);

  const handleTripEnd = () => {
    setFlag(true);
    navigation.navigate('startShift', { flag: true });
  };


  const changeNavigation = page => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.mainContainer}>
      <TopBar />
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
      <View style={styles.cardContainer}>
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 25}}>
          <View style={styles.cardView}>
            <OngoingTripCard />
          </View>
          <View style={styles.cardView}>
            <OngoingTripCard />
          </View>
          <View style={styles.cardView}>
            <OngoingTripCard />
          </View>
          <View style={[styles.cardView]}>
            <OngoingTripCard />
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.tripEndButton}
              onPress={handleTripEnd}>
              <Text style={styles.tripEndText}>Trip End</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <BottomBar page={'ongoingTrip'} navigation={changeNavigation} />
      </View>
    </View>
  );
};

export default OngoingTrip;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: '100%',
  },
  tripInfoView: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
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
  cardContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingBottom: 25,
    width: '100%',
  },
  cardView: {
    width: '100%',
    marginBottom: 20,
  },
  tripEndButton: {
    width: 250,
    height: 45,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  tripEndText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: '500',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
  },
});
