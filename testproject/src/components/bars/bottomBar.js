import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import travelIcon from '../../assets/travelIcon.png';
import roadIconGray from '../../assets/roadIconGray.png';
import inboxIconGray from '../../assets/inboxIconGray.png';
import userProfileIconGray from '../../assets/userProfileIconGray.png';

const BottomBar = ({onClick}) => {
  return (
    <View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => onClick()}>
          <Image source={travelIcon} style={styles.travel}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onClick()}>
          <Image source={roadIconGray} style={styles.roadGray}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onClick()}>
          <Image source={inboxIconGray} style={styles.inboxGray}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onClick()}>
          <Image source={userProfileIconGray} style={styles.userProfileGray}></Image>
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
    paddingHorizontal: 23,
    paddingVertical: 25,
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 21,
  },
  travel: {},
  roadGray: {},
  inboxGray: {},
  userProfileGray: {},
});
