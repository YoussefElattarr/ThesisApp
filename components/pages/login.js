import React, { Component } from "react";
import {View, Text, SafeAreaView, StyleSheet, AsyncStorage, Alert} from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import { Icon } from 'react-native-elements'
import axios from "axios";
import jwt from "jwt-decode";
import * as Notifications from 'expo-notifications';

var addpoints = 0


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userError: false,
      passwordError: false,
      userText: "",
      passwordText: "",
      wrongInfo: "",
    };
  }
  componentDidMount(){
    Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);
  }

  _handleNotificationResponse = response => {
    addpoints = 10;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event,
    });
  }
  
    onLogin = async () => {
     let flag = false;
      if (this.state.username.length === 0) {
        flag = true;
        this.setState({
          userError: true,
          userText: "Please enter a username!"
        });
      }
      if (this.state.password.length === 0) {
        flag = true;
        this.setState({
          passwordError: true,
          passwordText: "Please enter a password!"
        });
      }
      if (!flag) {
        await axios({
          url: "https://sittingserver.herokuapp.com/login",
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            username: this.state.username,
            password: this.state.password
          }
        })
          .then( async (res) =>  {
          var decoded = jwt(res.data.token)
          const asyncStorageKeys = await AsyncStorage.getAllKeys();
          if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear();
          }
          await AsyncStorage.setItem('id',decoded.id)
          if(addpoints >0){
            axios.get(`https://sittingserver.herokuapp.com/users/${decoded.id}`)
            .then(async (res) => {
              addpoints = addpoints + res.data.data.points
              await axios({
                url:`https://sittingserver.herokuapp.com/users/${decoded.id}`,
                method: "put",
                headers: {
                  "Content-Type": "application/json"
                },
                data: {
                  points: addpoints,
                }
              })
              .then((res) => {
                addpoints = 0
                Alert.alert("You just gained 10 points, YAAY")
              })
              .catch((err) => {
                Alert.alert("Somethin wrong happened")
              })
            })
            .catch((err) => {
              Alert.alert(""+ err.response.data)
            })
          }
          this.props.navigation.navigate("Drawer")
          })
          .catch(error => {
            console.log(error)
            this.setState({
              wrongInfo: "Incorrect Username or Password"
            });
          });
      }
    };  
  render() {
    // const styles = StyleSheet.create({
    //   baseText: {
    //     fontSize: 40,
    //     color: "#000000",
    //   }
    // });

    return (
      <View><Appbar.Header style={{backgroundColor: '#0C0D16'}}>
        
      <Appbar.Content
        title="Welcome"
      />
     
       </Appbar.Header>
     
        <SafeAreaView  style={{ marginTop: "20%" }}>
          
          <View style={{marginLeft: "30%",flexDirection: "row",alignItems: "center"}}>
          
            <Text  style={{color:"#000000", fontSize:40}}>Login</Text>
          </View>
         
          <TextInput
            mode="flat"
            placeholder="Username"
            onChangeText={this.handleChange('username')}
            style={{width: "80%",
              marginTop: "10%",
              marginLeft: "10%"}}
            error={this.state.userError}
          ></TextInput>
          <Text style={{ color: "#ff0000",  marginLeft: "10%" }}>{this.state.userText}</Text>
          <TextInput
            mode="flat"
            placeholder="Password"
            onChangeText={this.handleChange('password')}
            style={{ width: "80%", marginLeft: "10%" }}
            secureTextEntry={true}
            password={true}
            error={this.state.passwordError}
          ></TextInput>
          <Text style={{ color: "#ff0000", marginLeft: "10%" }}>{this.state.passwordText}</Text>
          <Button
            mode="contained"
            icon= "arrow-right-circle"
            style={{ width:"80%", marginLeft:"10%", backgroundColor: '#0C0D16'}}
            onPress={this.onLogin}
          >
            Sign in
          </Button>
          <Text style={{ color: "#ff0000", marginLeft: "10%", marginTop: "3%" }}>
            {this.state.wrongInfo}
          </Text>
          <View style={{ flexDirection: 'row'}}>
          <Text style={{ color: "#000000", marginLeft: "10%", marginTop: "2%" }}>
            {"Not a user? Sign up"}
          </Text>
          <Button  mode="contained"
            icon = "account-plus"
            onPress = { () => {
              this.props.navigation.navigate("Signup");
            }}
            style={{ marginLeft: "6.5%", width:"40%", backgroundColor: '#0C0D16' }}
            >Sign Up</Button>
          </View>
        </SafeAreaView>
        </View>
    );
  }
}


