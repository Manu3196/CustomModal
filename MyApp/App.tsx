import React, {useRef, useState} from 'react';
import {
  View,
} from 'react-native';
import SwipeDownRecognizer from './customModals/SwipeUpModal';
import SwipeUpRecognizer from './customModals/SwipeDownModal';
import SwipeLeftModal from './customModals/SwipeLeftModal'
import SwipeRightModal from './customModals/SwipeRightModal';

function App() {
  // To be Improved : 
  // a) Need to apply fallback to prevent other modqals from opening ;
  // const [swipeUpRecognizerMounted, setswipeUpRecognizerMounted] =
  //   useState(true);
  // const [swipedownRecognizerMounted, setSwipedownRecognizerMounted] =
  //   useState(true);

  return (
    <View style={{flex: 1}}>
      {/* {swipeUpRecognizerMounted ? ( */}
         <SwipeUpRecognizer
        // setSwipeUpRecognizerMounted = {setswipeUpRecognizerMounted}
        // setSwipedownRecognizerMounted = {setSwipedownRecognizerMounted}
        />
      {/* ) : null} */}
      {/* {swipedownRecognizerMounted ? ( */}
         <SwipeDownRecognizer
        // setSwipeUpRecognizerMounted = {setswipeUpRecognizerMounted}
        // setSwipedownRecognizerMounted = {setSwipedownRecognizerMounted}
        /> 
      
      <SwipeLeftModal />
      < SwipeRightModal / >
    </View>
  );
}

export default App;
