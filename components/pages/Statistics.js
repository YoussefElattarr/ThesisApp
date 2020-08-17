import * as React from 'react';
import { LineChart, BarChart, PieChart, StackedBarChart } from 'react-native-chart-kit'
import {View, Text, Dimensions, Alert} from 'react-native'
import {Card} from 'react-native-paper'


export default class MyComponent extends React.Component {
    state = {
        linedata : {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43, 77],
          strokeWidth: 2, // optional
        },
      ]
        },
        width: Dimensions.get('window').width
    }
    render() {
        return(
        <View style={{alignItems: "center", flex: 1}}>
  <View style={{ paddingTop: "4%",
            backgroundColor: '#0C0D16',
            alignItems: "center",
            width:this.state.width}}>
  <Text  style={{color: "white", paddingBottom: "4%"}}>
    Workouts per day
  </Text>
  </View>
  
  <View style={{backgroundColor:'#271661'}}>
  <LineChart
    data={this.state.linedata}
    width={Dimensions.get('window').width} // from react-native
    height={250}
    yAxisLabel={'#'}
    fromZero={true}
    onDataPointClick={(value, dataset, getColor)=>{
        Alert.alert("Value: " + value.value)
    }}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </View>
</View>)
      }
  }