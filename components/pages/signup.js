import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet, View, ScrollView, AsyncStorage } from "react-native";
import { TextInput, Button, Switch, Appbar} from "react-native-paper";
import { Icon } from 'react-native-elements'
import axios from "axios";
import * as Notifications from 'expo-notifications';
var addpoints = 0;

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          email: "",
          wrongInfo: "",
          userError: false,
          passwordError: false,
          emailError: false,
          userText: "",
          passwordText: "",
          emailText: "",
          showPassword: true
        };
      }

    onSingup = async () => {
     
    let flag = false;
    if (this.state.username.length === 0) {
      flag = true;
      this.setState({
        userError: true,
        userText: "Please enter a username!",
        visible: true
      });
    }
    if (this.state.email.length === 0) {
      flag = true;
      this.setState({
        emailError: true,
        emailText: "Please enter an email!",
        visible: true
      });
    }
    if (this.state.password.length === 0) {
      flag = true;
      this.setState({
        passwordError: true,
        passwordText: "Please enter a password!",
        visible: true
      });
    }
    if (!flag) {
      await axios({
        url: "https://sittingserver.herokuapp.com/newuser",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }
      })
        .then(async res => {
          const asyncStorageKeys = await AsyncStorage.getAllKeys();
          if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear();
          }
          await AsyncStorage.setItem('id',res.data.data._id)
          this.props.navigation.navigate("Drawer")
        })
        .catch(error => {
          this.setState({
            wrongInfo: "Something went wrong"
          });
        });
        
    }
  };

    handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChange = name => event => {
      this.setState({
        [name]: event,
      });
    }
    render() {
      const styles = StyleSheet.create({
        // baseText: {
        //   fontSize: 40,
        //   marginLeft: 10,
        //   color: "#000000"
        // },
        username: {
          width: 300,
          marginTop: 40
        }
      });
      return (
        <View><Appbar.Header style={{backgroundColor: '#0C0D16'}}>
        
      <Appbar.Content
        title="Welcome"
      />
     
       </Appbar.Header>
     
        <ScrollView>
        <SafeAreaView style={{ marginTop: "20%"}}>
            <View style={{marginLeft:38, marginRight:30}}>
            <View style={{marginLeft: 50, flexDirection: "row",alignItems: "center"}}>
             <Icon name='person-add' size="45" />
            <Text  style={{fontSize:40, color:"#000000", marginLeft:10}}>Sign Up</Text>
          </View>
          <TextInput
            mode="flat"
            placeholder="Username"
            textContentType="username"
            autoCompleteType="username"
            value={this.state.username}
            style={{width: "97.5%", marginTop: 30}}
            onChangeText={this.handleChange('username')}
            error={this.state.userError}
          ></TextInput>
          <Text style={{ color: "#ff0000" }}>{this.state.userText}</Text>
          <TextInput
            mode="flat"
            placeholder="Email"
            textContentType="emailAddress"
            autoCompleteType="email"
            value={this.state.email}
            style={{width: "97.5%"}}
            onChangeText={this.handleChange('email')}
            error={this.state.emailError}
          ></TextInput>
          <Text style={{ color: "#ff0000" }}>{this.state.emailText}</Text>
          <View style={{flexDirection: 'row'}}>
          <TextInput
            mode="flat"
            placeholder="Password"
            textContentType="newPassword"
            autoCompleteType="password"
            onChangeText={this.handleChange('password')}
            style={{ width: "77%" }}
            secureTextEntry={this.state.showPassword}
            password={true}
            error={this.state.passwordError}
          >
          </TextInput>

          <Switch
            style={{marginTop: "5%", marginLeft: "4%"}}
            onValueChange={this.handleClickShowPassword}
            value={!this.state.showPassword}
          /> 
          </View>
          <Text style={{ color: "#ff0000" }}>{this.state.passwordText}</Text>
       
       
          <Button
            mode="contained"
            style={{backgroundColor: '#0C0D16',   width: "97.5%"}}
            icon="account-plus"
            onPress={this.onSingup}
            
          >
            Sign Up
          </Button>
          <Text style={{ color: "#ff0000", marginLeft: "30%", marginTop: "3%" }}>
            {this.state.wrongInfo}
          </Text>
          <View style={{ flexDirection: 'row'}}>
          <Text style={{ color: "#000000", marginTop:"3%"}}>
            {"Already a user? Login"}
          </Text>
          <Button  mode="contained"
          icon= "arrow-right-circle"
            onPress = { () => {
              this.props.navigation.navigate("Login");
            }}
            style={{ marginLeft: "8%", width:"45%", backgroundColor: '#0C0D16' }}
            >Login</Button>
          </View>
 
          </View>
        </SafeAreaView>
        </ScrollView>
        </View>
      );
    }
  }
