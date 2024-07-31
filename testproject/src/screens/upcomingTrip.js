import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import UpcomingTripCard from '../components/cards/upcomingTripCard';
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';
import {Dimensions} from 'react-native';

const UpcomingTrip = ({ navigation }) => {
  const changeNavigation = page => {
    navigation.navigate(page);
  };

  const handleOnClick = () => {
    // console.log("OngoingTrips")
    navigation.navigate('startShift');
  };

  return (
    <View style={styles.mainContainer}>
      <TopBar />
      <View style={styles.container}>
        <ScrollView style={{paddingHorizontal:20, paddingTop: 25}}>
          <View style={styles.cardView}>
            <UpcomingTripCard onClick={handleOnClick} />
          </View>
          <View style={styles.cardView}>
            <UpcomingTripCard />
          </View>
          <View style={styles.cardView}>
            <UpcomingTripCard />
          </View>
          <View style={[styles.cardView, {marginBottom: 95}]}>
            <UpcomingTripCard />
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomView}>
        <BottomBar page={'upcomingTrip'} navigation={changeNavigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: '100%',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingBottom: 25,
    width: '100%',
  },
  cardView: {
    width: '100%',
    marginBottom: 20,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
  },
});

export default UpcomingTrip;
