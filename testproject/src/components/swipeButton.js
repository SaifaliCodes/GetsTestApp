import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const buttonWidth = 340;
const buttonHeight = 110;
const buttonPadding = 15;
const swipeableDimensions = buttonHeight - 2 * buttonPadding;

const SwipeButton = ({}) => {
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
        translateX.value = withSpring(end);
      }
    });

  const swipeAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  const circleAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 30
    const backgroundColor = interpolateColor(translateX.value, [0, end], ['#000000', '#006D2C'])

    return{
      backgroundColor,
    };
  })

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
    <GestureHandlerRootView style={{flex: 1}}>
      <View onLayout={getBoxLayout} style={styles.swipeContainer}>
        <GestureDetector gesture={pan}>
          <Animated.View
            onLayout={getCircleLayout}
            style={[styles.swipeableCircle, swipeAnimatedStyle, circleAnimatedStyle]}>
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
          </Animated.View>
        </GestureDetector>
        <Animated.View style={styles.textContainer}>
          <Animated.Text style={[styles.liveNowText, textLiveNowAnimatedStyle]}>
            You are{' '}
            <Animated.Text style={{fontWeight: '600'}}>Live Now</Animated.Text>
          </Animated.Text>
          <Animated.Text style={[styles.goLiveText, textGoLiveAnimatedStyle]}>
            Slide to{' '}
            <Animated.Text style={{fontWeight: '600'}}>Go Live</Animated.Text>
          </Animated.Text>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
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
  textContainer: {
    flexDirection: 'row',
    zIndex: -1,
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    width: 280,
  },
  goLiveText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#000',
    fontWeight: '300',
  },
  liveNowText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#000',
  },
});
