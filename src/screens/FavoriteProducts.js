import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class FavoriteProducts extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionHeader}>Coffee</Text>
          </View>
          <View>
            {[...Array(2)].map((_i, idx) => (
              <View style={styles.sectionCard}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("details")}
                  style={styles.card}
                >
                  <View style={styles.cardImage} />
                  <View style={styles.cardText}>
                    <Text style={styles.productName}>Kopi Tanpa Gula</Text>
                    <Text style={styles.productPrice}>IDR 27.000</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("details")}
                  style={styles.card}
                >
                  <View style={styles.cardImage} />
                  <View style={styles.cardText}>
                    <Text style={styles.productName}>Kopi Tanpa Gula</Text>
                    <Text style={styles.productPrice}>IDR 27.000</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionHeader}>Food</Text>
          </View>
          <View>
            {[...Array(2)].map((_i, idx) => (
              <View style={styles.sectionCard}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("details")}
                  style={styles.card}
                >
                  <View style={styles.cardImage} />
                  <View style={styles.cardText}>
                    <Text style={styles.productName}>Nasi Goreng</Text>
                    <Text style={styles.productPrice}>IDR 27.000</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("details")}
                  style={styles.card}
                >
                  <View style={styles.cardImage} />
                  <View style={styles.cardText}>
                    <Text style={styles.productName}>Nasi Goreng</Text>
                    <Text style={styles.productPrice}>IDR 27.000</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
    color: "#6A4029",
    textAlign: "center",
  },
});
