import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Homescreen';
import comp from './src/screens/components'
import comp1 from './src/screens/blog3'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    comp: {
      screen: comp,
    navigationOptions: {
      title: 'List of Grocery',
      headerStyle: { backgroundColor: 'yellow' },
    }},
    comp1:{
      screen: comp1,
    navigationOptions: {
      title: 'Toast Messages',
      headerStyle: { backgroundColor: 'red' },}}
    
    
  },
  {
    initialRouteName: "Home",
    
  }
);

export default createAppContainer(navigator);
