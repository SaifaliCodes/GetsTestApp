import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import userProfile from '../assets/userProfilePink.png'; // Make sure the image path is correct
import TopBar from '../components/bars/topBar';
import BottomBar from '../components/bars/bottomBar';

const MyProfile = ({ navigation }) => {

  const changeNavigation = (page: string) => {
    navigation.navigate(page);
  }



  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.profilePicContainer}>
        <Image source={userProfile} style={styles.profilePic} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>Vijay Singh</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>GENDER</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>MALE</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>AGE</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>37</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>NUMBER</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>9876543210</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>EMAIL</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>vijaysingh@gmail.com</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>DL NUMBER</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>DL01ABC2024ABC123</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>VEHICLE NUMBER</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>UP01-ABC-123</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>VEHICLE TYPE</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>MINI VAN</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>OFFICE ID</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>9876543210</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>VENDOR NAME</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>ABC TRAVELS</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>ADDRESS</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>SECTOR 01, SDJD NOIDA</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
      <BottomBar page={'myProfile'} navigation={changeNavigation}/>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  profilePicContainer: {
    marginTop: 25,
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: '#fa31541c',
    padding: 10,
  },
  profilePic: {},
  detailsContainer: {
    marginTop: 35,
    width: '100%',
    paddingHorizontal: 30,
    // height: '67%'
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  label: {
    flex: 0.4,
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#656565',
  },
  colon: {
    flex: 0.1,
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#656565',
  },
  value: {
    flex: 0.5,
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#252525',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
  }
});
