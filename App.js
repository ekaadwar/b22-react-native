import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import ProductDetails from "./src/screens/ProductDetails";
import Cart from "./src/screens/Cart";
import Checkout from "./src/screens/Checkout";
import FavoriteProducts from "./src/screens/FavoriteProducts";
import PromoProducts from "./src/screens/PromoProducts";

import Icon from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";
import { bold } from "ansi-colors";

const Stack = createStackNavigator();

const Header = ({ navigation, scene }) => {
  // console.log(scene.descriptor.options.title);
  const title = scene.descriptor.options.title;
  const page = scene.route.name;
  // console.log(title);

  return (
    <View style={headerStyles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          size={20}
          color={page === "details" ? "#fff" : "#000"}
        />
      </TouchableOpacity>

      {page !== "details" && <Text style={headerStyles.title}>{title}</Text>}

      {page === "details" ? (
        <TouchableOpacity onPress={() => navigation.navigate("cart")}>
          <IconFeather name="shopping-cart" size={20} color="#000" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 40,
    // backgroundColor: "#362115",
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

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
