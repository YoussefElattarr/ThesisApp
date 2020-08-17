import { createDrawerNavigator } from 'react-navigation-drawer';


// stacks
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Profile: {
    screen: ProfileStack,
  },
},
{ drawerPosition: "right"});

export default RootDrawerNavigator;