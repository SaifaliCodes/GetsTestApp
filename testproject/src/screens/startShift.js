import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const buttonWidth = 340;
const buttonHeight = 110;
const buttonPadding = 15;
const swipeableDimensions = buttonHeight - 2 * buttonPadding;

const StartShift = ({navigation, route}) => {
  const {flag} = route.params || {};

  const translateX = useSharedValue(0);
  const [boxDimensions, setBoxDimensions] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [circleDimensions, setCircleDimensions] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onSwipe = () => {
    navigation.navigate('ongoingTrip', {flag: true});
    translateX.value = withSpring(0);
  };

  const pan = Gesture.Pan()
    .onChange(event => {
      const maxOffset = boxDimensions.width - circleDimensions.width - 30;
      if (event.translationX >= 0 && event.translationX <= maxOffset) {
        translateX.value = event.translationX;
      }
    })
    .onFinalize(event => {
      const middleOffset = boxDimensions.width / 2 - circleDimensions.width / 2;
      const end = boxDimensions.width - circleDimensions.width - 30;

      if (event.translationX < middleOffset) {
        translateX.value = withSpring(0);
      } else {
        translateX.value = withSpring(end, {}, () => {
          runOnJS(onSwipe)();
        });
      }
    });

  const swipeAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  const containerAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30;
    const backgroundColor = interpolateColor(
      translateX.value,
      [0, end],
      ['#FFFFFF', '#FA3154'],
    );

    return {
      backgroundColor,
    };
  });

  const circleAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30;
    const backgroundColor = interpolateColor(
      translateX.value,
      [0, end],
      ['#000000', '#006D2C'],
    );

    return {
      backgroundColor,
    };
  });

  const offlineTextAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30;
    const opacity = interpolate(translateX.value, [0, end], [1, 0]);

    return {
      opacity,
    };
  });

  const onlineTextAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30;
    const opacity = interpolate(translateX.value, [0, end], [0, 1]);

    return {
      opacity,
    };
  });

  const textGoLiveAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30;
    const opacity = interpolate(translateX.value, [0, end], [1, 0]);

    return {
      opacity,
    };
  });

  const textLiveNowAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30;
    const opacity = interpolate(translateX.value, [0, end], [0, 1]);

    return {
      opacity,
    };
  });

  const getBoxLayout = event => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setBoxDimensions({x, y, width, height});
  };

  const getCircleLayout = event => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setCircleDimensions({x, y, width, height});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.container, containerAnimatedStyle]}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <View style={styles.profilePicBg}></View>
            <View style={styles.profileInfo}>
              <Text style={styles.welcometext}>Welcome Back!</Text>
              <Text style={styles.nameText}>Vivek Singh</Text>
            </View>
          </View>
          {flag ? (
            <Text style={styles.startShiftText}>
              End your shift for the day
            </Text>
          ) : (
            <Text style={styles.startShiftText}>
              Start your shift for the day
            </Text>
          )}
          <GestureHandlerRootView style={{flex: 1}}>
            <View onLayout={getBoxLayout} style={styles.swipeContainer}>
              <GestureDetector gesture={pan}>
                <Animated.View
                  onLayout={getCircleLayout}
                  style={[
                    styles.swipeableCircle,
                    swipeAnimatedStyle,
                    circleAnimatedStyle,
                  ]}>
                  {flag ? (
                    <Animated.View style={styles.statusText}>
                      <Animated.Text
                        style={[styles.status, offlineTextAnimatedStyle]}>
                        ONLINE
                      </Animated.Text>
                      <Animated.Text
                        style={[styles.status, onlineTextAnimatedStyle]}>
                        OFFLINE
                      </Animated.Text>
                    </Animated.View>
                  ) : (
                    <Animated.View style={styles.statusText}>
                      <Animated.Text
                        style={[styles.status, offlineTextAnimatedStyle]}>
                        OFFLINE
                      </Animated.Text>
                      <Animated.Text
                        style={[styles.status, onlineTextAnimatedStyle]}>
                        ONLINE
                      </Animated.Text>
                    </Animated.View>
                  )}
                </Animated.View>
              </GestureDetector>
              {flag ? (
                <Animated.View style={styles.offLineTextContainer}>
                  <Animated.Text
                    style={[styles.offlineNowText, textLiveNowAnimatedStyle]}>
                    You are{' '}
                    <Animated.Text style={{fontWeight: '600'}}>
                      Offline Now
                    </Animated.Text>
                  </Animated.Text>
                  <Animated.Text
                    style={[styles.endDutyText, textGoLiveAnimatedStyle]}>
                    Slide to{' '}
                    <Animated.Text style={{fontWeight: '600'}}>
                      End Duty
                    </Animated.Text>
                  </Animated.Text>
                </Animated.View>
              ) : (
                <Animated.View style={styles.onlineTextContainer}>
                  <Animated.Text
                    style={[styles.liveNowText, textLiveNowAnimatedStyle]}>
                    You are{' '}
                    <Animated.Text style={{fontWeight: '600'}}>
                      Live Now
                    </Animated.Text>
                  </Animated.Text>
                  <Animated.Text
                    style={[styles.goLiveText, textGoLiveAnimatedStyle]}>
                    Slide to{' '}
                    <Animated.Text style={{fontWeight: '600'}}>
                      Go Live
                    </Animated.Text>
                  </Animated.Text>
                </Animated.View>
              )}
            </View>
          </GestureHandlerRootView>
        </View>
      </Animated.View>
    </View>
  );
};

export default StartShift;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  blankContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB',
    height: '100%',
    width: '100%',
  },
  blankText: {
    fontSize: 20,
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '55%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 80,
  },
  profilePicBg: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: '#D7D7D7',
  },
  profileInfo: {
    marginLeft: 25,
  },
  welcometext: {
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '300',
    color: '#000000',
  },
  nameText: {
    fontSize: 22,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#000',
  },
  startShiftText: {
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '300',
    color: '#000',
    marginBottom: 80,
  },
  swipeContainer: {
    height: buttonHeight,
    width: buttonWidth,
    padding: buttonPadding,
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonHeight,
    shadowColor: 'gray',
    shadowOpacity: 0.9,
    elevation: 12,
  },
  swipeableCircle: {
    height: swipeableDimensions,
    width: swipeableDimensions,
    borderRadius: swipeableDimensions,
    backgroundColor: '#000',
    position: 'absolute',
    left: buttonPadding,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '373D3F',
    elevation: 10,
  },
  statusText: {
    flexDirection: 'row',
  },
  status: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '300',
    color: '#FFF',
    position: 'absolute',
    bottom: -8,
    right: -20,
  },
  offLineTextContainer: {
    flexDirection: 'row',
    zIndex: -1,
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    width: 300,

  },
  offlineNowText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#000',
  },
  endDutyText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#000',
    fontWeight: '300',
  },
  onlineTextContainer: {
    flexDirection: 'row',
    zIndex: -1,
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    width: 280,
  },
  liveNowText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#000',
  },
  goLiveText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#000',
    fontWeight: '300',
  },
});
