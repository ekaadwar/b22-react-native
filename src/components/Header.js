import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";

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

      {/* {page !== "details" || page !== "profile" ? (
        <Text style={headerStyles.title}>{title}</Text>
      ) : (
        <View />
      )} */}
      {/* {page !== "profile" && <Text style={headerStyles.title}>{title}</Text>} */}
      {page !== "details" && (
        <Text style={headerStyles.title}>
          {page !== "profile" && { title }}
        </Text>
      )}

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

export default Header;
