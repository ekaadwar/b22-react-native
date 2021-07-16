import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import MyStyles from "../components/MyStyles";
import { CircleX, LineSection } from "../components/Circle";

import IconFeather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProfileEdit() {
  const [text, onChangeText] = React.useState(null);
  return (
    <ScrollView style={[MyStyles.canvas, MyStyles.container]}>
      <View style={{ marginVertical: 50, alignItems: "center" }}>
        <View style={[CircleX(150), styles.profileImage]}>
          <TouchableOpacity
            style={[CircleX(50, "#6A4029"), styles.buttonImage]}
          >
            <IconFeather name="edit-2" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.labelInput}>Name:</Text>
        <TextInput
          style={LineSection(0)}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#000"
          placeholder="Christiano Ronaldo"
        />
      </View>
      <View style={[styles.section, { flexDirection: "row" }]}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome
            style={styles.optionDot}
            name="dot-circle-o"
            size={25}
            color="#6A4029"
          />
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome
            style={styles.optionDot}
            name="dot-circle-o"
            size={25}
            color="#9F9F9F"
          />
          <Text>Female</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.labelInput}>Email Address:</Text>
        <TextInput
          style={LineSection(0)}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#000"
          placeholder="cronaldo7@juventus.com"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.labelInput}>Phone Number:</Text>
        <TextInput
          style={LineSection(0)}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#000"
          placeholder="+62 82176230964"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.labelInput}>Date of birth:</Text>
        <TextInput
          style={LineSection(0)}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#000"
          placeholder="September 27th 1990"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.labelInput}>Delivery address:</Text>
        <TextInput
          style={LineSection(0)}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#000"
          placeholder="Juleha Street Block Q Number 666"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("payment")}
        style={styles.buttonBrow}
      >
        <Text style={styles.textLightLg}>Save and Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const primaryButtonY = 50;

const styles = StyleSheet.create({
  profileImage: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonImage: {
    justifyContent: "center",
    alignItems: "center",
  },

  labelInput: {
    fontWeight: "bold",
    color: "#9F9F9F",
  },
  section: {
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  optionDot: {
    marginRight: 10,
  },
  buttonBrow: {
    marginTop: 20,
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
