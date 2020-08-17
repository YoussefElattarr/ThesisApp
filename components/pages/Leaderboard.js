import * as React from 'react';
import Leaderboard from 'react-native-leaderboard';
import {Alert, View, AsyncStorage } from 'react-native'
import {Text, ThemeConsumer} from 'react-native-elements'
import axios from "axios";

export default class MyComponent extends React.Component {
    state = {
        data: [
            // {userName: 'Joe', highScore: 52},
            // {userName: 'Jenny', highScore: 120},
            // {userName: 'DannyDevito', highScore: 420}
        ],
        username: '',
        rank: -1,
        points: 0
    }

    compare(a, b){
        if(a.highScore > b.highScore)
            return -1
        if (b.highScore > a.highScore)
            return 1
        return 0
    }
    clearData = () => {
        this.setState({
            data:[]
        })
    }
    async componentDidMount(){
        var id = await AsyncStorage.getItem('id')
        let user = ''
        let score = ''
        await axios.get(`https://sittingserver.herokuapp.com/users/${id}`)
        .then(async (res) => {
            user = res.data.data.username
            score = res.data.data.points
            this.setState({
                username: user
            })
            this.clearData
            temp = []
            temp.push({userName: user, highScore: score})
            for(let i = 0; i < res.data.data.friends.length; i++){
                let temp1 = res.data.data.friends[i].username
                await axios.get(`https://sittingserver.herokuapp.com/getpoints/${temp1}`)
                .then((res) => {
                   temp.push(({userName: temp1, highScore: res.data.data}))
                })
                .catch((err) => {
                    console.log(err)
                })
                
            }
            this.setState({
                data: temp
            })
        })
        .catch((err) => {
            console.log(err)
        })
        this.findRank(this.state.data)
    }
    findRank = (list) => {
        list.sort(this.compare);
        let index = list.findIndex(x => x.userName === this.state.username);
        this.setState({
            rank: index + 1,
            points: list[index].highScore
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: 10,
            backgroundColor: '#0C0D16',
            alignItems: "center"
          }}
        >
             <Text style={{ fontSize:30, color: "white", paddingBottom: 10 }}>
            Leaderboard </Text>
           
            <View style={{  flexDirection: 'row'}}>
            <Text style={{ fontSize: 15, color: "white", paddingBottom: 10 }}> Rank: {this.state.rank}</Text>
            <Text style={{ fontSize: 15, color: "white", paddingBottom: 10 }}> Points: {this.state.points}</Text>
            </View>
            </View>
     
        <Leaderboard 
              data={this.state.data} 
              sortBy='highScore' 
              onRowPress={ (item, index) => { Alert.alert(item.userName + " clicked", item.highScore + " points, wow!") }}
              labelBy='userName'/>
      </View>
        )
      }
  }