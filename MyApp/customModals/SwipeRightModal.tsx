import React, { useRef } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import { screenHeight, screenWidth } from '../GenericDimensions/Dimensions';

const SwipeRightModal = ({
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

          if (dx > 10) {
            console.log('Swipe left');
            // setSwipeUpRecognizerMounted(false);
            // setSwipedownRecognizerMounted(true);
            Animated.timing(panHorizontal, {
              toValue: 200,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            if (dx > -10) {
              console.log('Swipe right');
              // setSwipedownRecognizerMounted(false);
              // setSwipeUpRecognizerMounted(false);
              Animated.timing(panHorizontal, {
                toValue: -200,
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
          }}
        ></View>
        <View
          style={{
            position: 'absolute',
            width: screenWidth * 0.6,
            height: screenHeight,
            backgroundColor: 'black',
            // alignSelf: 'flex-start' ,
            marginLeft : screenWidth 
          }}
        ></View>
      </Animated.View>
    </View>
  );
};

export default SwipeRightModal;
