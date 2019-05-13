import { Navigation } from 'react-native-navigation';

import FirstScreen from './App';
import SecondScreen from './App2';
import ThirdScreen from './App3';
import FourthScreen from './App4';

export function registerScreens() {
  Navigation.registerComponent('com.concat.FirstScreen', () => FirstScreen);
  Navigation.registerComponent('com.concat.SecondScreen', () => SecondScreen);
  Navigation.registerComponent('com.concat.ThirdScreen', () => ThirdScreen);
  Navigation.registerComponent('com.concat.FourthScreen', () => FourthScreen);
}