import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { FaBeer } from "react-icons/fa";

export default function Checkout() {
  return (
    <View style={[styles.container, { marginTop: 80 }]}>
      <View style={styles.sectionContent}>
        <Text style={styles.tittle}>Delivery</Text>
        <View style={styles.subSection}>
          <View style={styles.subHeader}>
            <Text style={{ fontWeight: "bold" }}>Address details</Text>
            <TouchableOpacity>
              <Text style={{ color: "#6A4029" }}>change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.cardSection}>
              <Text style={{ fontSize: 17 }}>Iskandar Street</Text>
            </View>
            <View style={styles.cardSection}>
              <Text>
                Km 5 refinery road oppsite re public road, effurun, Jakarta
              </Text>
            </View>
            <Text>+62 81348287878</Text>
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.subHeader}>
            <Text style={{ fontWeight: "bold" }}>Delivery Method</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardSection}>
              <Text>Door Delivery</Text>
            </View>
            <View style={styles.cardSection}>
              <Text>Pick up at store</Text>
            </View>
            <Text>Dine in</Text>
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.sectionTotal}>
            <Text>Total</Text>
            <Text style={styles.totalPrice}>IDR 123.000</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonBrow}>
          <Text style={styles.textLightLg}>Proceed to payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  subSection: {
    width: "100%",
    marginTop: 20,
  },

  cardSection: {
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 5,
    marginBottom: 5,
  },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    width: "100%",
  },

  sectionTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalPrice: {
    fontWeight: "bold",
    fontSize: 20,
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
