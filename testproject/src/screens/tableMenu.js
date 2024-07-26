import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import cross from '../assets/cross.png';
import crossGray from '../assets/crossGray.png';

const TableMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profilePicBg}></View>
        <View style={styles.profileInfo}>
          <Text style={styles.welcometext}>Welcome,</Text>
          <Text style={styles.nameText}>Vijay</Text>
        </View>
        <TouchableOpacity style={styles.crossIcon} >
          <Image source={crossGray}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItemContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Upcoming Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Completed Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Offices Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Call Helpdesk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Driver Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Rate This App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.label}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TableMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '14%',
    width: '80%',
    backgroundColor: '#FA3154',
  },
  profilePicBg: {
    height: 73,
    width: 73,
    borderRadius: 40,
    backgroundColor: '#D7D7D7',
  },
  profileInfo: {
    marginLeft: 18,
  },
  welcometext: {
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#FFF',
    marginBottom: 3,
  },
  nameText: {
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '600',
    color: '#FFF',
  },
  crossIcon: {
    width: 33,
    height: 33,
    position: 'absolute',
    right: 14,
    top: 10,
  },
  menuItemContainer: {
    flex: 1,
    width: '80%',
    paddingTop: 25,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
  },
  menuItem: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '600',
    color: '#000',
  },
});
