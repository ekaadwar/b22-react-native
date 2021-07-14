import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
// import { FaBeer } from "react-icons/fa";

export default function Payment() {
  const [text, onChangeText] = React.useState(null);

  return (
    <ScrollView style={[styles.container, { marginTop: 80 }]}>
      <View style={{ flex: 1 }}>
        <View style={styles.sectionContent}>
          <Text style={styles.contentHeader}>Products</Text>
          <View style={styles.card}>
            <View style={[styles.sectionCard, { marginBottom: 10 }]}>
              <View style={styles.side}>
                <View style={styles.productImg}></View>
              </View>
              <View style={styles.middle}>
                <Text>Hazelnut Latte</Text>
                <Text>x2</Text>
                <Text>Regular</Text>
              </View>
              <View style={styles.side}>
                <Text>IDR 24.0</Text>
              </View>
            </View>
            <View style={styles.sectionCard}>
              <View style={styles.side}>
                <View style={styles.productImg}></View>
              </View>
              <View style={styles.middle}>
                <Text>Hazelnut Latte</Text>
                <Text>x2</Text>
                <Text>Regular</Text>
              </View>
              <View style={styles.side}>
                <Text>IDR 24.0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.contentHeader}>Payment Method</Text>
          <View style={styles.card}>
            <View style={[styles.sectionCard, { alignItems: "center" }]}>
              <View>
                <View
                  style={[styles.methodIcon, { backgroundColor: "#F47B0A" }]}
                ></View>
              </View>
              <View>
                <Text>Card</Text>
              </View>
            </View>
            <View
              style={[
                styles.sectionCard,
                { alignItems: "center" },
                styles.paymentMid,
              ]}
            >
              <View>
                <View
                  style={[styles.methodIcon, { backgroundColor: "#895537" }]}
                ></View>
              </View>
              <View>
                <Text>Bank account</Text>
              </View>
            </View>
            <View style={[styles.sectionCard, { alignItems: "center" }]}>
              <View>
                <View
                  style={[styles.methodIcon, { backgroundColor: "#FFBA33" }]}
                ></View>
              </View>
              <View>
                <Text>Cash on delivery</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.contentHeader}>My Card</Text>
          <View style={styles.myCard}>
            <View style={styles.atm} />
            <View style={styles.atm} />
          </View>
        </View>
      </View>
      <View style={styles.total}>
        <Text>Total</Text>
        <Text style={styles.totalPrice}>84.000</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonBrow}>
          <Text style={styles.textLightLg}>Proceed Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const primaryButtonY = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    padding: 40,
    // alignItems: "center",
    // backgroundColor: "pink",
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
    marginBottom: 20,
  },

  contentHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    // marginTop: 10,
    padding: 12,
    borderRadius: 20,
    width: "100%",
    // flexDirection: "row",
    alignItems: "center",
  },

  sectionCard: {
    flexDirection: "row",
    width: "100%",
    // marginBottom: 10,
    // backgroundColor: "blue",
  },

  side: {
    flex: 1,
    // backgroundColor: "yellow",
  },

  middle: {
    flex: 2,
    // backgroundColor: "coral",
  },

  productImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#aaa",
  },

  paymentMid: {
    borderTopColor: "#000",
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    marginTop: 10,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    marginBottom: 10,
  },

  methodIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 5,
  },

  myCard: {
    flexDirection: "row",
  },

  atm: {
    height: 125,
    width: 200,
    backgroundColor: "#aaa",
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
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
