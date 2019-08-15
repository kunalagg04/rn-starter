import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorBox from './src/screens/ColorBox';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ListScreen : ListScreen,
    Color: ColorScreen,
    ColorBox:  ColorBox,
    BoxScreen : BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
