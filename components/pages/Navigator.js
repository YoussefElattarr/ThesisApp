import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Drawer from "./Drawer"
import Login from "./login"
import Signup from "./signup"

const stack = createStackNavigator(
  {
    
    Login: {
      screen: Login,
      navigationOptions: { header: null},
    },
    Drawer: {
      screen: Drawer,
      navigationOptions: { header: null }
    },
    Signup: {
      screen: Signup,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(stack);