import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import userProfileIcon from '../../assets/userProfileIcon.png';
import phoneIcon from '../../assets/phoneIcon.png';
import location from '../../assets/locationRed.png';
import navigateCircleIcon from '../../assets/navigateCircle.png';
import OngoingTripCodeModal from '../modals/ongoingTripCodeModal';

const OngoingTripCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <OngoingTripCodeModal onClose={() => setModalVisible(false)} />
      </Modal>
      <View style={styles.cards}>
        <View style={styles.userInfoRow}>
          <View style={styles.userInfo}>
            <Image source={userProfileIcon}></Image>
            <Text style={styles.userName}>Randhir Kumar</Text>
          </View>
          {/* <View style={styles.whiteCircle}></View> */}
          <View style={styles.phoneIconContainer}>
            <Image source={phoneIcon} style={styles.phoneIconStyle}></Image>
          </View>
        </View>
        <View style={styles.timeNLocationRow}>
          <Text style={styles.tripTime}>08:30 AM</Text>
          <View style={styles.locationCol}>
            <Image source={location}></Image>
            <Text style={styles.tripBeginFrom}>Sector 137, Noida...</Text>
          </View>
        </View>
        <View style={styles.tripInfoRow}>
          <Text style={styles.vehicleType}>3/4s</Text>
          <View style={styles.col}>
            <Text style={styles.tripInfo}>GETS-111</Text>
            <Text style={styles.vehicleNumber}>DL-QWEP-4473</Text>
          </View>
        </View>
        <View style={styles.navigateNBtn}>
          <Image source={navigateCircleIcon}></Image>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OngoingTripCard;

const styles = StyleSheet.create({
  cards: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingBottom: 3,
    paddingTop: 10,
  },
  userInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '37%',
    // backgroundColor: 'pink',
  },
  userName: {
    fontSize: 14,
    fontFamily: 'poppins',
    color: '#000',
    fontWeight: '400',
  },
  // whiteCircle: {
  //   height: 20,
  //   width: 20,
  //   backgroundColor: 'yellow',
  //   borderRadius: 10,
  //   position: 'absolute',
  //   top: -12,
  //   right: 30,
  // },
  phoneIconContainer: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 35,
    position: 'absolute',
    top: -19,
    right: -27,
  },
  phoneIconStyle: {
    height: 47,
    width: 47,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    alignItems: 'center',
  },
  col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeNLocationRow: {
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'center',
  },
  tripTime: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#232323',
    marginTop: 10,
    marginRight: 100,
  },
  locationCol: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '38%',
    // backgroundColor: 'yellow',
  },
  tripBeginFrom: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#7C7C7C',
    marginTop: 10,
  },
  tripInfoRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  vehicleType: {
    fontSize: 10,
    fontFamily: 'poppins',
    backgroundColor: '#000',
    fontWeight: '400',
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginRight: 110,
  },
  tripInfo: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
    color: '#7C7C7C',
    marginRight: 10,
  },
  vehicleNumber: {
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    color: '#000',
    marginRight: 10,
  },
  navigateNBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    // backgroundColor: 'yellow'
  },
  signInBtn: {
    width: '60%',
    height: 35,
    backgroundColor: '#FA3154',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '400',
  },
});
