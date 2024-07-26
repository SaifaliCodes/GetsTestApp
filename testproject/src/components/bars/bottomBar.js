import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import travelIcon from '../../assets/travelIcon.png';
import roadIconGray from '../../assets/roadIconGray.png';
import inboxIconGray from '../../assets/inboxIconGray.png';
import userProfileIconGray from '../../assets/userProfileIconGray.png';

const BottomBar = props => {
  const {page, navigation} = props;

  const [travel, setTravel] = useState();
  const [road, setRoad] = useState();
  const [inbox, setInbox] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (page === 'upcomingTrip') {
      setTravel('#FFF1F1');
      setRoad('#FFF');
      setInbox('#FFF');
      setProfile('#FFF');
    } else if (page === 'ongoingTrip') {
      setTravel('#FFF');
      setRoad('#FFF1F1');
      setInbox('#FFF');
      setProfile('#FFF');
    } else if (page === 'requestedTrip') {
      setTravel('#FFF');
      setRoad('#FFF');
      setInbox('#FFF1F1');
      setProfile('#FFF');
    } else if (page === 'myProfile') {
      setTravel('#FFF');
      setRoad('#FFF');
      setInbox('#FFF');
      setProfile('#FFF1F1');
    }
  }, [page]);

  const changeNavigation = page => {
    navigation(page);
  };

  return (
    <View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => changeNavigation('upcomingTrip')}>
          <View style={[styles.iconContainer, {backgroundColor: travel, borderTopLeftRadius: 21, borderBottomLeftRadius: 21}]}>
            <Image source={travelIcon} style={styles.travel}></Image>
            {page === 'upcomingTrip' && (
              <Text style={styles.iconText}>UPCOMING</Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNavigation('ongoingTrip')}>
          <View style={[styles.iconContainer, {backgroundColor: road}]}>
            <Image source={roadIconGray} style={styles.roadGray}></Image>
            {page === 'ongoingTrip' && (
              <Text style={styles.iconText}>ONGOING</Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNavigation('requestedTrip')}>
          <View style={[styles.iconContainer, {backgroundColor: inbox}]}>
            <Image source={inboxIconGray} style={styles.inboxGray}></Image>
            {page === 'requestedTrip' && (
              <Text style={styles.iconText}>REQUESTED</Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNavigation('myProfile')}>
          <View style={[styles.iconContainer, {backgroundColor: profile, borderTopRightRadius: 21, borderBottomRightRadius: 21}]}>
            <Image
              source={userProfileIconGray}
              style={styles.userProfileGray}></Image>
              {page === 'myProfile' && (
              <Text style={styles.iconText}>PROFILE</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    height: 75,
    borderRadius: 21,
    shadowColor: 'gray',
    // shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    // shadowRadius: 10,
    elevation: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 35,
  },
  iconText: {
    fontSize: 9,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#000',
  },
  travel: {},
  roadGray: {},
  inboxGray: {},
  userProfileGray: {},
});
