import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App'; 

const RootComponent = () => (
  <GestureHandlerRootView>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent('MyApp', () => RootComponent);
