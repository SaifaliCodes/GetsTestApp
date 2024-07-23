import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import topBarLogo from '../../assets/topBarLogo.png';
import tableMenu from '../../assets/tableMenu.png';

const TopBar = ({onClick}) => {
  return (
    <View>
      <View style={styles.topBar}>
        <Image source={topBarLogo} style={styles.topbarLogo}></Image>
        <Text style={styles.text}>xyz</Text>
        <TouchableOpacity onPress={() => onClick()}>
          <Image source={tableMenu} style={styles.tableMenuIcon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 23,
    paddingRight: 20,
    paddingVertical: 15,
    backgroundColor: '#000',
    width: '100%',
  },
  topbarLogo: {
    height: 40,
    width: 70,
  },
  text: {
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#FFF',
  },
  tableMenuIcon: {},
});
