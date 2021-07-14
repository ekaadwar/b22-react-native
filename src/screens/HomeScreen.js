import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal>
          {[...Array(20)].map((_i, idx) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("productDetails")} style={styles.productCard} key={String(idx)}>
              <View style={styles.cardImage}></View>
              <View style={styles.productText}>
                <Text style={styles.productName}>Hazelnut Latte</Text>
                <Text style={styles.productPrice}>IDR 25.000</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#F2F2F2",
  },

  productCard: {
    backgroundColor: "#fff",
    height: 260,
    width: 220,
    borderRadius: 30,
    marginTop: 70,
    margin: 20,
    elevation: 5,
    alignItems: "center",
  },

  cardImage: {
    backgroundColor: "#aaa",
    height: 160,
    width: 160,
    borderRadius: 20,
    marginTop: -30,
    // paddingBottom: 50
  },

  productText: {
    marginTop: 20,
    // backgroundColor: "coral",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },

  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  productPrice: {
    color: "#6A4029",
    fontWeight: "bold",
  },
});
