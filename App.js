import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { Component } from "react";
import { Text, View } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import ProductDetails from "./src/screens/ProductDetails";
import FavoriteProducts from "./src/screens/FavoriteProducts";
import PromoProducts from "./src/screens/PromoProducts";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={HomeScreen}
            name="home"
            options={{ title: "Dashboard" }}
          />
          <Stack.Screen component={ProductDetails} name="details" />
          <Stack.Screen
            component={FavoriteProducts}
            name="favoriteProducts"
            options={{ title: "Favorite Products" }}
          />
          <Stack.Screen
            component={PromoProducts}
            name="promoProducts"
            options={{ title: "Promo for you" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
