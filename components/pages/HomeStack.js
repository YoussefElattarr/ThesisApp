import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { header: null }
          },
    },
    {
        initialRouteName: "Home"
});

export default HomeStack;