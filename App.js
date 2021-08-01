import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  AppRegistry,
} from "react-native";

// Icon
import Ionicons from "react-native-vector-icons/Ionicons";

import React, { Component } from "react";
import { Provider } from "react-redux";

import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetails from "./src/screens/ProductDetails";
import Cart from "./src/screens/Cart";
import Checkout from "./src/screens/Checkout";
import Payment from "./src/screens/Payment";
import FavoriteProducts from "./src/screens/FavoriteProducts";
import PromoProducts from "./src/screens/PromoProducts";
import Profile from "./src/screens/Profile";
import ProfileEdit from "./src/screens/ProfileEdit";

import AllMenu from "./src/screens/AllMenu";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
import Security from "./src/screens/Security";

import { CircleX } from "./src/components/Circle";
import store from "./src/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const Main = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(appName, () => Main());

class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="home"
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          component={Profile}
          name="profile"
          options={{
            title: "My Profile",
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={ProfileEdit}
          name="profileEdit"
          options={{
            title: "Edit Profile",
            header: Header,
            headerTransparent: true,
          }}
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
        <Stack.Screen
          component={AllMenu}
          name="allMenu"
          options={{
            title: "All Menu",
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={PrivacyPolicy}
          name="privacyPolicy"
          options={{
            title: "Privacy Policy",
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={Security}
          name="security"
          options={{
            title: "Security",
            header: Header,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
}

const DrawerContent = ({ descriptors, navigation }) => {
  // console.log(descriptors);
  const menuItem = Object.keys(descriptors);
  // console.log(menuItem);
  const renderMenu = menuItem.map((item) => descriptors[item].options.title);
  console.log(renderMenu);

  return (
    <View style={drawerStyle.parent}>
      <View style={drawerStyle.userInfo}>
        <View style={CircleX(110, "#aaa")} />
        <Text style={drawerStyle.profileName}>Eka Fajhari Adwar</Text>
        <Text style={drawerStyle.profileEmail}>ekafajhariadwar@gmail.com</Text>
      </View>
      <FlatList
        style={drawerStyle.menuWrapper}
        data={renderMenu}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(menuItem[index].split("-")[0])}
          >
            <Text style={drawerStyle.menuItemText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => String(index)}
        ItemSeparatorComponent={() => (
          <View style={drawerStyle.menuSeparator} />
        )}
      />
      <View>
        <TouchableOpacity style={drawerStyle.signOut}>
          <Text style={drawerStyle.menuItemText}>Sign-out</Text>
          <Ionicons name="arrow-forward-outline" size={20} color="#6A4029" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const drawerStyle = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },

  userInfo: {
    paddingTop: 40,
    backgroundColor: "#6A4029",
    height: 275,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 20,
  },

  profileName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 10,
  },

  profileEmail: {
    color: "#fff",
  },

  menuWrapper: {
    margin: 40,
  },

  menuItemText: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "bold",
  },

  menuSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: "#6A4029",
    marginVertical: 20,
  },

  signOut: {
    flexDirection: "row",
    margin: 40,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{ backgroundColor: "transparent" }}
          drawerContent={DrawerContent}
        >
          <Drawer.Screen
            options={{ title: "Main" }}
            name="root"
            component={MainStack}
          />
          <Drawer.Screen
            options={{ title: "Edit Profile" }}
            name="editProfile"
            component={ProfileEdit}
          />
          <Drawer.Screen
            options={{ title: "Orders" }}
            name="orders"
            component={Cart}
          />
          <Drawer.Screen
            options={{ title: "All Menu" }}
            name="allMenu"
            component={AllMenu}
          />
          <Drawer.Screen
            options={{ title: "Privacy policy" }}
            name="privacyPolicy"
            component={PrivacyPolicy}
          />
          <Drawer.Screen
            options={{ title: "Security" }}
            name="security"
            component={Security}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
