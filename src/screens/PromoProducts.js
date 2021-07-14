import { PrivateValueStore } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default class PromoProducts extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.sectionHeader}>Stay Hungry!</Text>
          <Text style={{ textAlign: "center" }}>
            Good deals update every wednesday
          </Text>
        </View>
        <View>
          {[...Array(8)].map((_i, idx) => (
            <View style={styles.sectionCard}>
              <View style={styles.card}>
                <View style={styles.cardImage} />
                <View style={styles.promo}>
                  <Text style={styles.promoPrice}>IDR 17.000</Text>
                </View>
                <View style={styles.cardText}>
                  <Text style={styles.productName}>Kopi Tanpa Gula</Text>
                  <Text style={styles.productPrice}>IDR 27.000</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardImage} />
                <View style={styles.promo}>
                  <Text style={styles.promoPrice}>IDR 17.000</Text>
                </View>
                <View style={styles.cardText}>
                  <Text style={styles.productName}>Kopi Tanpa Gula</Text>
                  <Text style={styles.productPrice}>IDR 27.000</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const radImage = 100;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
  },

  container: {
    paddingHorizontal: 40,
  },

  section: {
    marginBottom: 20,
  },

  sectionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },

  sectionCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    height: 175,
    width: 125,
    borderRadius: 20,
    marginTop: radImage / 2,
    alignItems: "center",
  },

  cardImage: {
    backgroundColor: "#aaa",
    height: radImage,
    width: radImage,
    borderRadius: radImage / 2,
    marginTop: (radImage / 2) * -1,
  },

  promo: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 8,
    elevation: 4,
    borderRadius: 5,
    marginTop: -20,
  },

  promoPrice: {
    color: "#6A4029",
  },

  cardText: {
    // backgroundColor: "coral",
    flex: 1,
    marginTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },

  productName: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  productPrice: {
    color: "#9F9F9F",
    textAlign: "center",
    textDecorationLine: "line-through",
  },
});
