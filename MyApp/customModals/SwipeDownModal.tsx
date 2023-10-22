import React, { useRef } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import { screenHeight, screenWidth } from '../GenericDimensions/Dimensions';

const SwipeDownRecognizer = ({
}) => {
  const panVertical = useRef(new Animated.Value(0)).current;
  const panHorizontal = useRef(new Animated.Value(0)).current;

  const swipeRef = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (e, gestureState) => {
        const { dx, dy } = gestureState;

        if (Math.abs(dx) > Math.abs(dy)) {
          // Horizontal swipe
        } else {
          // Vertical swipe
          if (dy > 10) {
            console.log('Swipe Down at sdown');
            // setSwipeUpRecognizerMounted(false);
            // setSwipedownRecognizerMounted(true);
            Animated.timing(panVertical, {
              toValue: 500,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            if (dy > -100) {
              console.log('Swipe Up at sdown');
              // setSwipedownRecognizerMounted(false);
              // setSwipeUpRecognizerMounted(false);
              Animated.timing(panVertical, {
                toValue: -500,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }
          }
        }
      },
      onPanResponderRelease: () => {},
    }),
  );

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          transform: [
            { translateY: panVertical },
            { translateX: panHorizontal },
          ],
        }}
        {...swipeRef.current.panHandlers}
      >
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 'transparent',
            alignSelf: 'center',
          }}
        ></View>
        <View
          style={{
            position: 'absolute',
            width: screenWidth * 0.95,
            height: screenHeight * 0.8,
            backgroundColor: 'black',
            alignSelf: 'center',
            marginTop: screenHeight,
            borderRadius: 20,
          }}
        ></View>
      </Animated.View>
    </View>
  );
};

export default SwipeDownRecognizer;
