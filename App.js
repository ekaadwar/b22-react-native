import "react-native-gesture-handler";

// import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View } from "react-native";
// import { FaBeer } from "react-icons/fa";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Text>Hello World!!!</Text>
      </NavigationContainer>
    );
  }
}
