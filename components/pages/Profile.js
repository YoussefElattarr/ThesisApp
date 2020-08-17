import * as React from 'react';
import {  TextInput, Appbar, Button  } from 'react-native-paper';
import {View, Text, Alert, AsyncStorage,ScrollView} from 'react-native'
import {Card, Overlay, ListItem, CheckBox  } from 'react-native-elements'
import { DrawerActions } from "react-navigation-drawer";
import axios from 'axios'
import * as Notifications from 'expo-notifications';
var addpoints = 0;
var id
const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },]
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      friends:0,
      medical:[],
      notifications:"",
      overlayUsername: false,
      overlayPassword: false,
      overlayEmail: false,
      overlayMedical: false,
      overlayFriend: false,
      overlayNotification: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      updateUsername: "",
      updatePassword: "",
      updateEmail: "",
      addFriend:"",
      minutes:"",
    };
  }

  _handleNotificationResponse = async response => {
    addpoints = 10;
    
  }

  async componentDidMount(){
    id = await AsyncStorage.getItem('id')
    await axios.get(`https://sittingserver.herokuapp.com/users/${id}`)
    .then((res) => {
      this.setState({
        username: res.data.data.username,
        email:res.data.data.email,
        medical: res.data.data.issues,
        friends: res.data.data.friends.length,
        notifications: res.data.data.notifications
      })
    })
    .catch((err) => {
      console.log(err)
    })
    Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);
  }

  toggleOverlay1 =  () => {
    this.setState(state => ({ overlayUsername: !state.overlayUsername }));
  }

  toggleOverlay2 =  () => {
    this.setState(state => ({ overlayPassword: !state.overlayPassword }));
  }

  toggleOverlay3 =  () => {
    this.setState(state => ({ overlayEmail: !state.overlayEmail }));
  }

  toggleOverlay4 =  () => {
    this.setState(state => ({ overlayMedical: !state.overlayMedical }));
  }

  toggleOverlay5 =  () => {
    this.setState(state => ({ overlayFriend: !state.overlayFriend }));
  }

  toggleOverlay6 =  () => {
    this.setState(state => ({ overlayNotification: !state.overlayNotification }));
  }

  handleChange = name => event => {
    this.setState({
      [name]: event,
    });
  }

  clearMedicalList = () =>{
    this.setState({
      medical: []
     })
  }

  addFriend = async () => {
    let friend = this.state.addFriend
    var id = await AsyncStorage.getItem('id')
                axios({
                  method: 'post',
                  url: `https://sittingserver.herokuapp.com/addfriend/${id}`,
                  headers: {
                      "Content-Type": "application/json"
                    },
                  data: { username: friend}
              })
              .then(function (response) {
                  Alert.alert("" + response.data)
                  this.toggleOverlay5()
              })
              .catch(function (error) {
                  Alert.alert("" + error.response.data.error)
              });
  }

  updateUsername = async () => {
    this.setState({
      username: this.state.updateUsername
    })
    var id = await AsyncStorage.getItem('id')
    await axios({
      url:`https://sittingserver.herokuapp.com/users/${id}`,
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: this.state.username,
      }
    })
    .then((res) => {
      Alert.alert("" + res.data.msg)
      this.toggleOverlay1()
    })
    .catch((err) => {
      Alert.alert("Somethin wrong happened")
    })
  }

  updatePassword = () => {
    this.setState({
      password: this.state.updatePassword
    })
    this.toggleOverlay2()
  }

  updateEmail = async () => {
    this.setState({
      email: this.state.updateEmail
    })
    var id = await AsyncStorage.getItem('id')
    await axios({
      url:`https://sittingserver.herokuapp.com/users/${id}`,
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: this.state.email,
      }
    })
    .then((res) => {
      Alert.alert("" + res.data.msg)
      this.toggleOverlay3()
    })
    .catch((err) => {
      Alert.alert("Somethin wrong happened")
    })
  }

  updateMedical = async () => {
    this.clearMedicalList;
    let temp = []
    if(this.state.checked1 == true){
      temp.push('issue1')
    }
    if(this.state.checked2 == true){
      temp.push('issue2')
    }
    if(this.state.checked3 == true){
      temp.push('issue3')
    }
    if(this.state.checked4 == true){
      temp.push('issue4')
    }
    if(this.state.checked5 == true){
      temp.push('issue5')
    }
    this.setState({
      medical: temp
    })
    var id = await AsyncStorage.getItem('id')
    await axios({
      url:`https://sittingserver.herokuapp.com/users/${id}`,
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        issue: this.state.medical,
      }
    })
    .then((res) => {
      Alert.alert("" + res.data.msg)
      this.toggleOverlay4()
    })
    .catch((err) => {
      Alert.alert("Somethin wrong happened")
    })

    
   
  }
  updateNotifications = async () => {
    this.setState({
      notifications: this.state.minutes
    })
    var id = await AsyncStorage.getItem('id')
    await axios({
      url:`https://sittingserver.herokuapp.com/users/${id}`,
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        notifications: this.state.notifications,
      }
    })
    .then(async (res) => {
      Alert.alert("" + res.data.msg)
      this.toggleOverlay3()
      await axios({
        url:"http://192.168.0.103:3000/update",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          mins: this.state.notifications,
          token: res.data.data.expo
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      Alert.alert("Somethin wrong happened")
    })
  }

  render() {
    if(addpoints > 10){
    axios.get(`https://sittingserver.herokuapp.com/users/${id}`)
    .then(async (res) => {
      addpoints = addpoints + res.data.data.points
      await axios({
        url:`https://sittingserver.herokuapp.com/users/${id}`,
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          points: addpoints,
        }
      })
      .then((res) => {
        Alert.alert("You just gained 10 points, YAAY")
        addpoints = 0;
      })
      .catch((err) => {
        Alert.alert("Somethin wrong happened")
        addpoints = 0;
      })
    })
    .catch((err) => {
      Alert.alert(""+ err.response.data)
      addpoints = 0;
    })
  }
    return (
      <View style={{flex:1}}>
        <ScrollView>
      <Appbar.Header style={{backgroundColor: '#0C0D16'}}>
        <Appbar.BackAction
          onPress={() => this.props.navigation.goBack(null)}
        />
        <Appbar.Content
          title="Profile"
        />
        <Appbar.Action icon="dots-vertical" onPress={() => {this.props.navigation.dispatch(DrawerActions.toggleDrawer())}} />
       
         </Appbar.Header>
         
         <Card title='Acount Info'  containerStyle={{padding: 10}}>
         <ListItem
            title='Username'
            subtitle={this.state.username}
            leftIcon={{name: 'account-box'}}
            buttonGroup={{buttons:['Edit'] , onPress:this.toggleOverlay1}}
            bottomDivider
            />
            {/* <ListItem
            title='Password'
            subtitle={this.state.password}
            leftIcon={{ name: 'lock' }}
            buttonGroup={{buttons:['Edit'], onPress:this.toggleOverlay2}}
            bottomDivider
            /> */}
            <ListItem
            title='Email'
            subtitle={this.state.email}
            leftIcon={{ name: 'email' }}
            buttonGroup={{buttons:['Edit'], onPress:this.toggleOverlay3}}
            bottomDivider
            />
            <ListItem
            title='Medical Issues'
            subtitle={this.state.medical.toString()}
            leftIcon={{ name: 'info' }}
            buttonGroup={{buttons:['Edit'], onPress:this.toggleOverlay4}}
            bottomDivider
            />
         </Card>
         <Overlay overlayStyle={{width:"100%"}} isVisible={this.state.overlayUsername} onBackdropPress={this.toggleOverlay1} >
        
         <View>
         <TextInput
            mode="flat"
            placeholder="Username"
            textContentType="username"
            autoCompleteType="username"
            value={this.state.updateUsername}
            onChangeText={this.handleChange('updateUsername')}
            >
            </TextInput>
            <Button
            mode="contained"
            style={{ marginTop:"5%",  width: "100%", backgroundColor: '#0C0D16'}}
            icon="account-edit"
            onPress={this.updateUsername}
            
          >
            Update
          </Button>   
      </View>
      </Overlay>
      <Overlay overlayStyle={{width:"100%"}} isVisible={this.state.overlayPassword} onBackdropPress={this.toggleOverlay2} >
        <View>
        <TextInput
            mode="flat"
            placeholder="Password"
            textContentType="newPassword"
            autoCompleteType="password"
            value={this.state.updatePassword}
            onChangeText={this.handleChange('updatePassword')}
            secureTextEntry={true}
            password={true}  
            >
            </TextInput>
            <Button
            mode="contained"
            style={{  marginTop:"5%",  width: "100%", backgroundColor: '#0C0D16'}}
            icon="account-edit"
            onPress={this.updatePassword}
            
          >
            Update
          </Button>   
        </View>
     </Overlay>
     <Overlay overlayStyle={{width:"100%"}} isVisible={this.state.overlayEmail} onBackdropPress={this.toggleOverlay3} >
        
        <View>
        <TextInput
            mode="flat"
            placeholder="Email"
            textContentType="emailAddress"
            autoCompleteType="email"
            value={this.state.updateEmail}
            onChangeText={this.handleChange('updateEmail')}
            >
            </TextInput>
            <Button
            mode="contained"
            style={{  marginTop:"5%",  width: "100%", backgroundColor: '#0C0D16'}}
            icon="account-edit"
            onPress={this.updateEmail}
            
          >
            Update
          </Button>   
     </View>
     </Overlay>
     <Overlay overlayStyle={{width:"100%"}} isVisible={this.state.overlayMedical} onBackdropPress={this.toggleOverlay4} >
        
        <View>
        <Text style={{marginBottom:"2%"}}>Please make sure to check all your issues</Text>
        <CheckBox
          title='Issue 1'
          checked={this.state.checked1}
          onPress={() => this.setState({checked1: !this.state.checked1})}
        />
        <CheckBox
          title='Issue 2'
          checked={this.state.checked2}
          onPress={() => this.setState({checked2: !this.state.checked2})}
        />
        <CheckBox
          title='Issue 3'
          checked={this.state.checked3}
          onPress={() => this.setState({checked3: !this.state.checked3})}
        />
        <CheckBox
          title='Issue 4'
          checked={this.state.checked4}
          onPress={() => this.setState({checked4: !this.state.checked4})}
        />
        <CheckBox
          title='Issue 5'
          checked={this.state.checked5}
          onPress={() => this.setState({checked5: !this.state.checked5})}
        />
        <Button
            mode="contained"
            style={{  marginTop:"5%",  width: "100%" , backgroundColor: '#0C0D16'}}
            icon="account-edit"
            onPress={this.updateMedical}
            
          >
            Update
          </Button>   
     </View>
     </Overlay>
     <Overlay overlayStyle={{width:"100%"}} isVisible={this.state.overlayFriend} onBackdropPress={this.toggleOverlay5} >
        
        <View>
        <TextInput
            mode="flat"
            placeholder="username"
            textContentType="username"
            autoCompleteType="username"
            value={this.state.addFriend}
            onChangeText={this.handleChange('addFriend')}
            >
            </TextInput>
            <Button
            mode="contained"
            style={{  marginTop:"5%",  width: "100%", backgroundColor: '#0C0D16'}}
            icon="account-plus"
            onPress={this.addFriend}
            
          >
            Add
          </Button>   
     </View>
     </Overlay>
    
     <Overlay overlayStyle={{width:"100%"}} isVisible={this.state.overlayNotification} onBackdropPress={this.toggleOverlay6} >
        
        <View>
        <TextInput
            mode="flat"
            placeholder="minutes"
            textContentType="minutes"
            autoCompleteType="cc-number"
            keyboardType="numeric"
            value={this.state.minutes}
            onChangeText={this.handleChange('minutes')}
            >
            </TextInput>
            <Button
            mode="contained"
            style={{  marginTop:"5%",  width: "100%", backgroundColor: '#0C0D16'}}
            icon="account-edit"
            onPress={this.updateNotifications}
            
          >
            Update
          </Button>   
     </View>
     </Overlay>
          <Card title='More Actions'  containerStyle={{padding: 10}}>
          <ListItem
            title='Friends'
            subtitle={` You have ${this.state.friends} friends`}
            leftIcon={{name: 'people-outline'}}
            buttonGroup={{buttons:['Add'] , onPress:this.toggleOverlay5}}
            bottomDivider
            />
            <ListItem
            title='Notifications'
            subtitle={` Every ${this.state.notifications} mins`}
            leftIcon={{name: 'alarm'}}
            buttonGroup={{buttons:['Change'] , onPress:this.toggleOverlay6}}
            bottomDivider
            />
         </Card>
         <Button
            mode="contained"
            style={{ backgroundColor: '#ff0000', marginLeft:"4%", marginTop:"2%",  width: "92%"}}
            //icon="logout-variant"
            onPress={async ()=>{
              await axios.get("http://192.168.0.103:3000/toggleflag")
              .then(() => {
                Alert.alert("Done")
              })
              .catch(()=>{
                Alert.alert("Something wrong happened")
              })
            }}
            
          >
            Stop notifications
          </Button> 
     <Button
            mode="contained"
            style={{ backgroundColor: '#0C0D16', marginLeft:"4%", marginTop:"2%",  width: "92%"}}
            icon="logout-variant"
            onPress={()=>{
              AsyncStorage.clear();
              this.props.navigation.navigate("Login")
            }}
            
          >
            Sign Out
          </Button> 
          </ScrollView>
      </View>
    );
  }
}