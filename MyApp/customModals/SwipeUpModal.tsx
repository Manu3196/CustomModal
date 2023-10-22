import React, {useRef, useState} from 'react';
import {View, PanResponder, Animated} from 'react-native';
import {screenHeight, screenWidth} from '../GenericDimensions/Dimensions';

const SwipeUpRecognizer =({
  // setSwipeUpRecognizerMounted,
  // setSwipedownRecognizerMounted,
}) => {
  const panVertical = useRef(new Animated.Value(0)).current;
  const panHorizontal = useRef(new Animated.Value(0)).current;
  // const [ ismounted , setIsMounted ] =  useState (false)

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
        } 
        else {
          // Vertical swipe
          // if (dy > 0) {
          // Swipe down
          console.log('dy' , dy);
          if (dy > 100) {
            console.log('Swipe Down');
            // setSwipeUpRecognizerMounted(false)
            // setSwipedownRecognizerMounted(false)
            // setIsMounted(false)
            Animated.timing(panVertical, {
              toValue: 500, // Adjust this value for the desired animation height
              duration: 300, // Animation duration in milliseconds
              useNativeDriver: false,
            }).start();
            // }
          } else {
            // Swipe up
             if (dy > -100) {
          // setSwipeUpRecognizerMounted(true)
          // setSwipedownRecognizerMounted(false)
              // setIsMounted(true)
               console.log('Swipe Up');
              Animated.timing(panVertical, {
                toValue: -500, // Adjust this value for the desired animation height
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

  // panVertical. == -500 ? setIsMounted(true) : null
  // console.log('ismounred' , ismounted);

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
              position: 'absolute',
              width: screenWidth * 0.95,
              height: screenHeight * 0.8,
              backgroundColor: 'black',
              alignSelf: 'center',
              marginTop: -screenHeight,
              borderRadius: 20,
            }}></View>
      </Animated.View>
    </View>
  );
};

export default SwipeUpRecognizer;
