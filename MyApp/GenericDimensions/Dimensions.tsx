import { Dimensions } from 'react-native';

// Get the screen dimensions
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// You can now use screenWidth and screenHeight in your component
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);
