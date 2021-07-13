import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
// import { FaBeer } from "react-icons/fa";

export default function App() {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerContent}>My Coupons</Text>
      </View>
      <TextInput style={styles.searcing} onChangeText={onChangeText} placeholder="Browse coupons" value={text} />
      <Text style={{ marginTop: 20 }}>Claim coupons by clicking it</Text>
      <TouchableOpacity style={[styles.card, { backgroundColor: "#F5C361" }]}>
        <View style={styles.cardImg} />
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold" }}>Get a cup of coffee for free on sunday morning</Text>
          <Text>Only at 7 to 9 AM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, { backgroundColor: "#88B788" }]}>
        <View style={styles.cardImg} />
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold" }}>HAPPY MOTHER’S DAY!</Text>
          <Text>Get one of our favorite menu for free!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, { backgroundColor: "#C59378" }]}>
        <View style={styles.cardImg} />
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold" }}>HAPPY HALLOWEEN!</Text>
          <Text>Do you like chicken wings? Get 1 free only if you buy pinky promise</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ marginTop: 60 }}>You have no coupons left</Text>
    </View>
  );
}

const primaryButtonY = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    padding: 40,
    alignItems: "center",
  },

  sectionHeader: {
    alignItems: "center",
  },

  searcing: {
    backgroundColor: "#fff",
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },

  headerContent: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 55,
  },

  card: {
    marginTop: 20,
    padding: 12,
    borderRadius: 20,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },

  cardImg: {
    // backgroundColor: "orange",
    flex: 1,
  },

  cardContent: {
    // backgroundColor: "coral",
    flex: 3,
  },

  buttonBrow: {
    backgroundColor: "#6A4029",
    alignItems: "center",
    justifyContent: "center",
    height: primaryButtonY,
    borderRadius: primaryButtonY / 5,
  },

  textLightLg: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
