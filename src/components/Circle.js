import React from "react";
import { View, StyleSheet } from "react-native";

export const CircleX = (radius = 20, color = "#aaa") => {
  const circle = {
    width: radius,
    height: radius,
    borderRadius: radius / 2,
    backgroundColor: color,
  };
  return circle;
};

export const LineSection = (
  distance = 5,
  lineColor = "#000",
  fontColor = "#000"
) => {
  const value = {
    color: fontColor,
    borderBottomColor: lineColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: distance,
    marginBottom: distance,
  };
  return value;
};

export const Section = (distance = 5) => {
  const value = {
    paddingVertical: distance,
  };
  return value;
};

export const Card = (
  direction = "column",
  justify = "start",
  align = "start"
) => {
  const value = {
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    width: "100%",
  };
  return value;
};
