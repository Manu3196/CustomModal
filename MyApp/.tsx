import React, {useRef} from 'react';
import {View, PanResponder, Animated} from 'react-native';
import {screenHeight, screenWidth} from './GenericDimensions/Dimensions';

const SwipeLeftModal = () => {
  const panVertical = useRef(new Animated.Value(0)).current;
  const panHorizontal = useRef(new Animated.Value(0)).current;

  // const getpanState = useRef(0);
  const swipeRef = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (e, gestureState) => {
        const {dx, dy} = gestureState;

        // Determine the direction of the swipe
        if (Math.abs(dx) > Math.abs(dy)) {
          // Horizontal swipe
          if (dx > 0) {
            // Swipe right
            if (dx > 400) {
              console.log('Swipe Right');
              Animated.timing(panHorizontal, {
                toValue: 50, // Adjust this value for the desired animation height
                duration: 300, // Animation duration in milliseconds
                useNativeDriver: false,
              }).start();
            }
          } else {
            // Swipe left
            if (dx > -400) {
              console.log('Swipe Left');
              Animated.timing(panHorizontal, {
                toValue: -50, // Adjust this value for the desired animation height
                duration: 300, // Animation duration in milliseconds
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
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          transform: [
            {translateY: panVertical},
            {translateX: panHorizontal}, // Add this for horizontal translation
          ],
        }}
        {...swipeRef.current.panHandlers}>
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 'transparent',
            alignSelf: 'center',
          }}></View>
          <View
            style={{
              width: screenWidth ,
              height: screenHeight ,
              backgroundColor: 'black',
              alignSelf: 'center',
              marginRight: screenWidth * 0.20 ,
              borderRadius: 20,
            }}></View>
      </Animated.View>
    </View>
  );
};

export default SwipeLeftModal;
