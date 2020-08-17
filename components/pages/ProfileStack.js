import { createStackNavigator } from 'react-navigation-stack';
import Profile from './Profile';

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: { header: null }
          },
    },
    {
        initialRouteName: "Profile"
});

export default ProfileStack;