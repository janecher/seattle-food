import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantShowScreen from "./src/screens/RestaurantShowScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RestaurantShow: RestaurantShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Search Food App',
    },
  }
);

export default createAppContainer(navigator);
