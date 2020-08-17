import * as React from 'react';
import { BottomNavigation, Text, Appbar  } from 'react-native-paper';
import {View, Alert, AsyncStorage} from 'react-native'
import { DrawerActions } from "react-navigation-drawer";
import Leaderboard from "./Leaderboard"
import Statistics from "./Statistics"
import Workouts from "./Workouts"
import axios from 'axios'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
var addpoints = 0;
var id

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'workout', title: 'Workout', icon: 'bat' },
      { key: 'leaderboard', title: 'Leaderboard', icon: 'format-list-numbered' },
      { key: 'statistics', title: 'Statistics', icon: 'chart-line' },
    ],
  };

   registerForPushNotificationsAsync = async () => {
    let token;
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;

      await axios({
      url:`https://sittingserver.herokuapp.com/users/${id}`,
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        expo: token,
      }
    })
    .then((res) => {
    })
    .catch((err) =>{
      console.log(err)
    })
  
    return token;
  }

  async componentDidMount(){
    id = await AsyncStorage.getItem('id')
    await this.registerForPushNotificationsAsync()
    Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);
    await axios.get(`https://sittingserver.herokuapp.com/users/${id}`)
    .then(async  (res) => {
      await axios({
        url:"http://192.168.0.103:3000/update",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          mins: res.data.data.notifications,
          token: res.data.data.expo
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log("pls")
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  _handleNotificationResponse =  response => {
    addpoints = 10;
     
  }


  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    workout: Workouts,
    leaderboard: Leaderboard,
    statistics:  Statistics
  });

  render() {
    if(addpoints > 10){
      axios.get(`https://sittingserver.herokuapp.com/users/${id}`)
      .then(async (res) => {
        addedpoints = addpoints + res.data.data.points
        await axios({
          url:`https://sittingserver.herokuapp.com/users/${id}`,
          method: "put",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            points: addedpoints,
          }
        })
        .then((res) => {
          Alert.alert("You just gained 10 points, YAAY")
          addpoints = 0
        })
        .catch((err) => {
          Alert.alert("Somethin wrong happened")
          addpoints = 0
        })
      })
      .catch((err) => {
        Alert.alert(""+ err.response.data)
      })
    }
    return (
      <View style={{flex:1}}>
        
      <Appbar.Header style={{backgroundColor: '#0C0D16'}}>
        <Appbar.BackAction
          onPress={() => this.props.navigation.goBack(null)}
        />
        <Appbar.Content
          title="Home"
        />
        <Appbar.Action icon="dots-vertical" onPress={() => {this.props.navigation.dispatch(DrawerActions.toggleDrawer())}} />
       
         </Appbar.Header>
         
      <BottomNavigation
        barStyle={{backgroundColor: '#0C0D16'}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
      </View>
    );
  }
}