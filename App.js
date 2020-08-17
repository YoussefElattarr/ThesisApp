import React, { Component } from "react";
import Navigator from "./components/pages/Navigator";
var addpoints = 0

export default class App extends Component {
  
  render() {
    console.disableYellowBox = true; 
    return <Navigator points={addpoints} />;
  }
}