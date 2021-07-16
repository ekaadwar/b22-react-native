import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";

export default function ProductDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.sectionCard}>
          <View style={styles.imgDetail} />
          <Text style={styles.cardHeader}>Cold Brew</Text>
          <Text style={styles.cardBody}>
            Delivery only on Monday to friday at 1 - 7 pm
          </Text>
        </View>
      </View>

      <View style={styles.sectionBody}>
        <Text style={styles.bodyContent}>
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </Text>
      </View>

      <View style={styles.sectionCart}>
        <Text style={styles.price}>IDR 30.0</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("profile")}
          style={styles.buttonCart}
        >
          <IconFeather name="shopping-cart" size={20} color="#362115" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const radius = 170;
const radiusButton = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#362115",
    paddingLeft: 40,
    paddingBottom: 40,
  },

  imgDetail: {
    height: radius,
    width: radius,
    borderRadius: radius / 2,
    backgroundColor: "gray",
  },

  sectionCard: {
    // justifyContent: "center",
    paddingTop: 140,
    backgroundColor: "#FFBA33",
    width: 275,
    height: 450,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },

  cardContainer: {
    alignItems: "flex-end",
  },

  cardHeader: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },

  cardBody: {
    width: 150,
    textAlign: "center",
  },

  sectionBody: {
    flex: 1,
    justifyContent: "center",
  },

  bodyContent: {
    color: "#fff",
    fontWeight: "bold",
    width: 250,
  },

  sectionCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 40,
  },

  price: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  buttonCart: {
    height: radiusButton,
    width: radiusButton,
    borderRadius: radiusButton / 2,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
  },
});
