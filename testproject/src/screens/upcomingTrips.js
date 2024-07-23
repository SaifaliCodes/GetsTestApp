import React from 'react';
import {View, StyleSheet} from 'react-native';
import UpcomingTripsCard from '../components/cards/upcomingTripsCard';
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';

const UpcomingTrips = ({navigation}) => {
  const handleTableMenuClick = () => {
     
  }

  const handleBottomBarIconClick = () => {

  }

  const handleOnClick = () => {
    // console.log("OngoingTrips")
    navigation.navigate('ongoingTrips');
  };

  return (
    <View style={styles.mainContainer}>
      <TopBar onClick={handleTableMenuClick}/>
      <View style={styles.container}>  
        <View style={styles.cardView}>
          <UpcomingTripsCard onClick={handleOnClick} />
        </View>
        <View style={styles.cardView}>
          <UpcomingTripsCard />
        </View>
        <View style={styles.cardView}>
          <UpcomingTripsCard />
        </View>
        <View style={styles.cardView}>
          <UpcomingTripsCard />
        </View>        
      </View>
      <BottomBar onClick={handleBottomBarIconClick}/>
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
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    // height: '100%',
    paddingVertical: 25,
  },
  cardView: {
    width: '90%',
    marginBottom: 20,
  },
  // delete: {
  //   backgroundColor: 'pink',
  // },
});

export default UpcomingTrips;
