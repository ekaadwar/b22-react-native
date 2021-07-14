import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { FaBeer } from "react-icons/fa";

export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerContent}>Cart</Text>
      </View>
      <View style={styles.sectionContent}>
        <Text>swipe on an item to delete</Text>
        <View style={styles.card}>
          <View style={styles.cardImg}></View>
          <View style={styles.cardContent}>
            <Text style={styles.cardHead}>Veggie tomato mix</Text>
            <View style={styles.cardPay}>
              <Text style={styles.cardPrice}>IDR 30.000</Text>
              <View style={styles.cardAmount}>
                <TouchableOpacity>
                  <Text style={styles.contentAmount}>-</Text>
                </TouchableOpacity>
                <Text style={styles.contentAmount}>99</Text>
                <TouchableOpacity>
                  <Text style={styles.contentAmount}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImg}></View>
          <View style={styles.cardContent}>
            <Text style={styles.cardHead}>Veggie tomato mix</Text>
            <View style={styles.cardPay}>
              <Text style={styles.cardPrice}>IDR 30.000</Text>
              <View style={styles.cardAmount}>
                <TouchableOpacity>
                  <Text style={styles.contentAmount}>-</Text>
                </TouchableOpacity>
                <Text style={styles.contentAmount}>99</Text>
                <TouchableOpacity>
                  <Text style={styles.contentAmount}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImg}></View>
          <View style={styles.cardContent}>
            <Text style={styles.cardHead}>Veggie tomato mix</Text>
            <View style={styles.cardPay}>
              <Text style={styles.cardPrice}>IDR 30.000</Text>
              <View style={styles.cardAmount}>
                <TouchableOpacity>
                  <Text style={styles.contentAmount}>-</Text>
                </TouchableOpacity>
                <Text style={styles.contentAmount}>99</Text>
                <TouchableOpacity>
                  <Text style={styles.contentAmount}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonBrow}>
          <Text style={styles.textLightLg}>Confirn and Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const radiCardImg = 70;
const amountX = 75;
const amountY = 30;
const primaryButtonY = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    padding: 40,
  },
  sectionHeader: {
    alignItems: "center",
  },
  headerContent: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 55,
  },
  sectionContent: {
    alignItems: "center",
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
  },
  cardImg: {
    backgroundColor: "#aaa",
    width: radiCardImg,
    height: radiCardImg,
    borderRadius: radiCardImg / 2,
    marginRight: 12,
  },

  cardContent: {
    justifyContent: "space-between",
    // backgroundColor: "coral",
    flex: 1,
  },

  cardPay: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "pink",
  },

  cardHead: {
    fontSize: 18,
  },
  cardPrice: {
    color: "#895537",
    fontSize: 15,
  },
  cardAmount: {
    backgroundColor: "#6A4029",
    width: amountX,
    height: amountY,
    borderRadius: amountY / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  contentAmount: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
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
