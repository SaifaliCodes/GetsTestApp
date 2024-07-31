import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';
import RequestedTripCard from '../components/cards/requestedTripCard';

const RequestedTrip = ({ navigation }) => {
  const changeNavigation = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.mainContainer}>
      <TopBar />
      <View style={styles.container}>
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 25}}>
          <View style={styles.cardView}>
            <RequestedTripCard />
          </View>
          <View style={styles.cardView}>
            <RequestedTripCard />
          </View>
          <View style={styles.cardView}>
            <RequestedTripCard />
          </View>
          <View style={[styles.cardView, {marginBottom: 95}]}>
            <RequestedTripCard />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <BottomBar page={'requestedTrip'} navigation={changeNavigation} />
      </View>
    </View>
  );
};

export default RequestedTrip;

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
