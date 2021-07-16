import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";
import MyStyles from "../components/MyStyles";
import { CircleX, LineSection, Section, Card } from "../components/Circle";
import Icon from "react-native-vector-icons/FontAwesome";
import MainButton from "../components/MainButton";

export default function Profile({ navigation }) {
  const radius = 70;
  const color = "coral";
  return (
    <ScrollView style={[MyStyles.canvas, MyStyles.container]}>
      <Text style={MyStyles.titleMain}>My Profile</Text>
      <View style={Section(10)}>
        <View style={[styles.subTitleBar, { marginBottom: 10 }]}>
          <Text style={MyStyles.titleSub}>Your Information</Text>
          <TouchableOpacity onPress={() => navigation.navigate("profileEdit")}>
            <Text style={{ color: "#6A4029" }}>edit</Text>
          </TouchableOpacity>
        </View>
        <View style={[MyStyles.card, { flexDirection: "row" }]}>
          <View style={[CircleX(radius, color), { marginRight: 12 }]} />
          <View style={{ flex: 1 }}>
            <Text style={MyStyles.titleSub}>Zulaikha</Text>
            <Text style={LineSection(2, "#6A4029", "#6A4029")}>
              zulaikha17@gmail.com
            </Text>
            <Text style={LineSection(2, "#6A4029", "#6A4029")}>
              +62 81348287878
            </Text>
            <Text style={{ color: "#6A4029" }}>
              Iskandar Street Block A Number 102
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={Section(10)}>
        <View style={Card("row", "space-between", "center")}>
          <Text style={MyStyles.titleSub}>Order Histori</Text>
          <Icon name="chevron-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Section(10)}>
        <View style={Card("row", "space-between", "center")}>
          <Text style={MyStyles.titleSub}>Edit Password</Text>
          <Icon name="chevron-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Section(10)}>
        <View style={Card("row", "space-between", "center")}>
          <Text style={MyStyles.titleSub}>FAQ</Text>
          <Icon name="chevron-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Section(10)}>
        <View style={Card("row", "space-between", "center")}>
          <Text style={MyStyles.titleSub}>Help</Text>
          <Icon name="chevron-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("payment")}
        style={styles.buttonBrow}
      >
        <Text style={styles.textLightLg}>Proceed to payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const primaryButtonY = 50;

const styles = StyleSheet.create({
  subTitleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionCard: {
    color: "#6A4029",
  },
  cardSection: {
    borderBottomColor: "#6A4029",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 2,
    marginBottom: 2,
  },
  buttonBrow: {
    marginTop: 50,
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
