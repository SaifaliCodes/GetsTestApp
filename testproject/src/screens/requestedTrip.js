import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';
import RequestedTripCard from '../components/cards/requestedTripCard';

const RequestedTrip = ({navigation}) => {
  const changeNavigation = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.mainContainer}>
      <TopBar />
      <ScrollView style={styles.container}>
        <View style={styles.cardView}>
          <RequestedTripCard />
        </View>
        <View style={styles.cardView}>
          <RequestedTripCard />
        </View>
        <View style={styles.cardView}>
          <RequestedTripCard />
        </View>
        <View style={styles.cardView}>
          <RequestedTripCard />
        </View>
      </ScrollView>
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
    paddingVertical: 25,
    width: '90%',
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
