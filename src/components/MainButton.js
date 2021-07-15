import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const MainButton = (text = "Text") => {
  const primaryButtonY = 50;

  const buttonStyles = {
    shape: {
      backgroundColor: "#6A4029",
      alignItems: "center",
      justifyContent: "center",
      height: primaryButtonY,
      borderRadius: primaryButtonY / 5,
    },
    text: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 15,
    },
  };

  return (
    <TouchableOpacity style={buttonStyles.shape}>
      <Text style={buttonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
