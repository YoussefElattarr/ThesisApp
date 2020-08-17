import React, { Component } from "react";
import {View,  ScrollView, Dimensions } from 'react-native'
import { Video } from 'expo-av';
import {Button, Switch, Text} from 'react-native-paper'
import { Card, ListItem, Overlay, Divider } from 'react-native-elements'
import MyView from "./MyView";
var flag = false
var item;
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      visible10: false,
      visible11: false,
      visible12: false,
      visible13: false,
      isSwitchOn: false,
      video: ""
    };
  }

  render(){
    if(!flag){
      item = Math.floor(Math.random() * 13);
      flag = true
    }
       if(item==0){ return(
            <View>
              <ScrollView>
              <Card
               title='Workout of the day'>
                 <Video 
            source={require("../videos/catpose.mp4")}
            rate={1.0}
  volume={10.0}
  isMuted={true}
  resizeMode= {Video.RESIZE_MODE_COVER}
  shouldPlay
  useNativeControls
  isLooping
  style={{ width: "100%", height:300 }}
            />
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
             <Switch
              style={{marginTop:'5%',marginLeft:'5%'}}
              value={this.state.isSwitchOn}
              onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
      </View>
      <MyView hide={!this.state.isSwitchOn}>
      <Video 
            source={require('../videos/catpose.mp4')}
            rate={1.0}
  volume={10.0}
  isMuted={true}
  resizeMode= {Video.RESIZE_MODE_COVER}
  shouldPlay
  useNativeControls
  isLooping
  style={{ width: "100%", height: 300, marginTop:'5%' }}
            />
        </MyView>
            </Card>
            <Divider style={{marginTop:'5%'}}/>
            <Card
              title='All Workouts'>
            <ListItem
              title='Cat Pose'
              onPress = {() => { this.setState({ visible1: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Cow Pose'
              onPress = {() => { this.setState({ visible2: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Extended Side Angle Pose Left'
              onPress = {() => { this.setState({ visible3: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Extended Side Angle Pose Right'
              onPress = {() => { this.setState({ visible4: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Figure 4 Left'
              onPress = {() => { this.setState({ visible5: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Figure 4 Right'
              onPress = {() => { this.setState({ visible6: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Hamstring Stretch'
              onPress = {() => { this.setState({ visible7: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Raised Hands'
              onPress = {() => { this.setState({ visible8: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Seated Twist Left'
              onPress = {() => { this.setState({ visible9: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Seated Twist Right'
              onPress = {() => { this.setState({ visible10: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Shoulder Stretch'
              onPress = {() => { this.setState({ visible11: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Star Pose'
              onPress = {() => { this.setState({ visible12: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Table Pose'
              onPress = {() => { this.setState({ visible13: true})}}
              bottomDivider
              chevron/>
            </Card>
            </ScrollView>
            <View >
                <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Cat Pose'>
                 <Video 
            source={require('../videos/catpose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible1:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Cow Pose'>
                 <Video 
            source={require('../videos/cowpose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible2:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Extended Side Angle Pose Left'>
                 <Video 
            source={require('../videos/extendedsideangleposeleft.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible3:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Extended Side Angle Pose Right'>
                 <Video 
            source={require('../videos/extendedsideangleposeright.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible4:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Figure 4 Left'>
                 <Video 
            source={require('../videos/figure4left.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible5:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Figure 4 Right'>
                 <Video 
            source={require('../videos/figure4right.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible6:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Hamstring Stretch'>
                 <Video 
            source={require('../videos/hamstringstretch.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible7:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Raised Hands'>
                 <Video 
            source={require('../videos/raisedhands.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible8:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Seated Twist Left'>
                 <Video 
            source={require('../videos/seatedtwistleft.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible9:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Seated Twist Right'>
                 <Video 
            source={require('../videos/seatedtwistright.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible10:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Shoulder Stretch'>
                 <Video 
            source={require('../videos/shoulderstretch.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible11:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Star Pose'>
                 <Video 
            source={require('../videos/starpose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible12:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Table Pose'>
                 <Video 
            source={require('../videos/tablepose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible13:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
              </View>
        )
      }
      if(item==1){
        return(
          <View>
              <ScrollView>
              <Card
               title='Workout of the day'>
                 <Video 
            source={require("../videos/cowpose.mp4")}
            rate={1.0}
  volume={10.0}
  isMuted={true}
  resizeMode= {Video.RESIZE_MODE_COVER}
  shouldPlay
  useNativeControls
  isLooping
  style={{ width: "100%", height:300 }}
            />
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
             <Switch
              style={{marginTop:'5%',marginLeft:'5%'}}
              value={this.state.isSwitchOn}
              onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
      </View>
      <MyView hide={!this.state.isSwitchOn}>
      <Video 
            source={require('../videos/cowpose.mp4')}
            rate={1.0}
  volume={10.0}
  isMuted={true}
  resizeMode= {Video.RESIZE_MODE_COVER}
  shouldPlay
  useNativeControls
  isLooping
  style={{ width: "100%", height: 300, marginTop:'5%' }}
            />
        </MyView>
            </Card>
            <Divider style={{marginTop:'5%'}}/>
            <Card
              title='All Workouts'>
            <ListItem
              title='Cat Pose'
              onPress = {() => { this.setState({ visible1: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Cow Pose'
              onPress = {() => { this.setState({ visible2: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Extended Side Angle Pose Left'
              onPress = {() => { this.setState({ visible3: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Extended Side Angle Pose Right'
              onPress = {() => { this.setState({ visible4: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Figure 4 Left'
              onPress = {() => { this.setState({ visible5: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Figure 4 Right'
              onPress = {() => { this.setState({ visible6: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Hamstring Stretch'
              onPress = {() => { this.setState({ visible7: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Raised Hands'
              onPress = {() => { this.setState({ visible8: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Seated Twist Left'
              onPress = {() => { this.setState({ visible9: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Seated Twist Right'
              onPress = {() => { this.setState({ visible10: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Shoulder Stretch'
              onPress = {() => { this.setState({ visible11: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Star Pose'
              onPress = {() => { this.setState({ visible12: true})}}
              bottomDivider
              chevron/>
              <ListItem
              title='Table Pose'
              onPress = {() => { this.setState({ visible13: true})}}
              bottomDivider
              chevron/>
            </Card>
            </ScrollView>
            <View >
                <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Cat Pose'>
                 <Video 
            source={require('../videos/catpose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible1:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Cow Pose'>
                 <Video 
            source={require('../videos/cowpose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible2:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Extended Side Angle Pose Left'>
                 <Video 
            source={require('../videos/extendedsideangleposeleft.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible3:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Extended Side Angle Pose Right'>
                 <Video 
            source={require('../videos/extendedsideangleposeright.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible4:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Figure 4 Left'>
                 <Video 
            source={require('../videos/figure4left.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible5:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Figure 4 Right'>
                 <Video 
            source={require('../videos/figure4right.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible6:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Hamstring Stretch'>
                 <Video 
            source={require('../videos/hamstringstretch.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible7:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Raised Hands'>
                 <Video 
            source={require('../videos/raisedhands.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible8:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Seated Twist Left'>
                 <Video 
            source={require('../videos/seatedtwistleft.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible9:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Seated Twist Right'>
                 <Video 
            source={require('../videos/seatedtwistright.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible10:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Shoulder Stretch'>
                 <Video 
            source={require('../videos/shoulderstretch.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible11:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Star Pose'>
                 <Video 
            source={require('../videos/starpose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible12:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
             <View >
                <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
                <View style={{marginTop:"5%"}}>
                <Card
               title='Table Pose'>
                 <Video 
            source={require('../videos/tablepose.mp4')}
            rate={1.0}
            volume={10.0}
            isMuted={true}
            resizeMode= {Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            isLooping
            style={{ width: "100%", height: 300 }}
            />
            </Card>
            <View>
            <Button
            mode="contained"
            style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
            onPress={()=>{
              this.setState({visible13:false})
            }}
            
          >
            Close window
          </Button>
          </View>
                </View>
                </Overlay>       
             </View> 
              </View>
      )
      }
      if(item==2){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/extendedsideangleposeleft.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==3){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/extendedsideangleposeright.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==4){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/figure4left.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==5){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/figure4right.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==6){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/hamstringstretch.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==7){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/raisedhands.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==8){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/seatedtwistleft.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==9){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/seatedtwistright.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==10){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/shoulderstretch.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==11){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/starpose.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
      if(item==12){
        return(
          <View>
          <ScrollView>
          <Card
           title='Workout of the day'>
             <Video 
        source={require("../videos/tablepose.mp4")}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height:300 }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop:'7%',marginLeft:'50%'}}> Show Trainer</Text>    
         <Switch
          style={{marginTop:'5%',marginLeft:'5%'}}
          value={this.state.isSwitchOn}
          onValueChange={() => {this.setState({isSwitchOn: !this.state.isSwitchOn})}}/>
  </View>
  <MyView hide={!this.state.isSwitchOn}>
  <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
volume={10.0}
isMuted={true}
resizeMode= {Video.RESIZE_MODE_COVER}
shouldPlay
useNativeControls
isLooping
style={{ width: "100%", height: 300, marginTop:'5%' }}
        />
    </MyView>
        </Card>
        <Divider style={{marginTop:'5%'}}/>
        <Card
          title='All Workouts'>
        <ListItem
          title='Cat Pose'
          onPress = {() => { this.setState({ visible1: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Cow Pose'
          onPress = {() => { this.setState({ visible2: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Left'
          onPress = {() => { this.setState({ visible3: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Extended Side Angle Pose Right'
          onPress = {() => { this.setState({ visible4: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Left'
          onPress = {() => { this.setState({ visible5: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Figure 4 Right'
          onPress = {() => { this.setState({ visible6: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Hamstring Stretch'
          onPress = {() => { this.setState({ visible7: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Raised Hands'
          onPress = {() => { this.setState({ visible8: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Left'
          onPress = {() => { this.setState({ visible9: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Seated Twist Right'
          onPress = {() => { this.setState({ visible10: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Shoulder Stretch'
          onPress = {() => { this.setState({ visible11: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Star Pose'
          onPress = {() => { this.setState({ visible12: true})}}
          bottomDivider
          chevron/>
          <ListItem
          title='Table Pose'
          onPress = {() => { this.setState({ visible13: true})}}
          bottomDivider
          chevron/>
        </Card>
        </ScrollView>
        <View >
            <Overlay isVisible={this.state.visible1} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cat Pose'>
             <Video 
        source={require('../videos/catpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible1:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible2} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Cow Pose'>
             <Video 
        source={require('../videos/cowpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible2:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible3} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Left'>
             <Video 
        source={require('../videos/extendedsideangleposeleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible3:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible4} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Extended Side Angle Pose Right'>
             <Video 
        source={require('../videos/extendedsideangleposeright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible4:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible5} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Left'>
             <Video 
        source={require('../videos/figure4left.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible5:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible6} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Figure 4 Right'>
             <Video 
        source={require('../videos/figure4right.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible6:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible7} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Hamstring Stretch'>
             <Video 
        source={require('../videos/hamstringstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible7:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible8} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Raised Hands'>
             <Video 
        source={require('../videos/raisedhands.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible8:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible9} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Left'>
             <Video 
        source={require('../videos/seatedtwistleft.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible9:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible10} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Seated Twist Right'>
             <Video 
        source={require('../videos/seatedtwistright.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible10:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible11} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Shoulder Stretch'>
             <Video 
        source={require('../videos/shoulderstretch.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible11:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible12} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Star Pose'>
             <Video 
        source={require('../videos/starpose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible12:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
         <View >
            <Overlay isVisible={this.state.visible13} overlayStyle={{width:Dimensions.get('window').width}}>
            <View style={{marginTop:"5%"}}>
            <Card
           title='Table Pose'>
             <Video 
        source={require('../videos/tablepose.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={true}
        resizeMode= {Video.RESIZE_MODE_COVER}
        shouldPlay
        useNativeControls
        isLooping
        style={{ width: "100%", height: 300 }}
        />
        </Card>
        <View>
        <Button
        mode="contained"
        style={{ marginLeft:"4%", marginTop:"5%", width: "92%", backgroundColor: '#0C0D16'}}
        onPress={()=>{
          this.setState({visible13:false})
        }}
        
      >
        Close window
      </Button>
      </View>
            </View>
            </Overlay>       
         </View> 
          </View>
      )
      }
    }
  }