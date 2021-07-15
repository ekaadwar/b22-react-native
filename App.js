import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { Component } from "react";

import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetails from "./src/screens/ProductDetails";
import Cart from "./src/screens/Cart";
import Checkout from "./src/screens/Checkout";
import Payment from "./src/screens/Payment";
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
          <Stack.Screen
            component={ProductDetails}
            options={{
              title: "Details",
              header: Header,
              headerTransparent: true,
            }}
            name="details"
          />
          <Stack.Screen
            component={Cart}
            name="cart"
            options={{
              title: "Cart",
              header: Header,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            component={Checkout}
            name="checkout"
            options={{
              title: "Checkout",
              header: Header,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            component={Payment}
            name="payment"
            options={{
              title: "Payment",
              header: Header,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            component={FavoriteProducts}
            name="favoriteProducts"
            options={{
              title: "Favorite Products",
              header: Header,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            component={PromoProducts}
            name="promoProducts"
            options={{
              title: "Promo for you",
              header: Header,
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
