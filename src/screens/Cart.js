import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { deleteItem } from "../redux/actions/cart";

function Cart({ cart, navigation, deleteCartItem }) {
  return (
    <View style={[styles.container, { marginTop: 80 }]}>
      {/* <View style={styles.sectionHeader}>
        <Text style={styles.headerContent}>Cart</Text>
      </View> */}
      <View style={styles.sectionContent}>
        <View style={styles.tittleCart}>
          <MaterialCommunityIcons name="gesture-swipe" />
          <Text style={{ marginLeft: 10 }}>swipe on an item to delete</Text>
        </View>
        {cart.data.length > 0 && (
          <SwipeListView
            style={{ width: "100%", marginVertical: 20 }}
            data={cart.data}
            renderItem={(data, rowMap) => (
              <View style={styles.card}>
                <View style={styles.cardImg}></View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardHead}>{data.item.product_name}</Text>
                  <View style={styles.cardPay}>
                    <Text style={styles.cardPrice}>{data.item.price}</Text>
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
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                {/* {console.log(data.index)} */}
                <TouchableOpacity style={styles.behindButton}>
                  <MaterialIcons name="favorite-border" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => deleteCartItem(data.index)}
                  // onPress={() => console.log(data.index)}
                  style={styles.behindButton}
                >
                  <MaterialIcons name="delete-outline" size={25} />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={(radBehindButton * 2 + 20) * -1}
          />
        )}
        {cart.data.length < 1 && (
          <View
            style={{
              justifyContent: "center",
              // backgroundColor: "red",
              height: "100%",
            }}
          >
            <Text>There is no data!</Text>
          </View>
        )}
      </View>
      <View>
        <TouchableOpacity
          // onPress={() => this.props.navigation.navigate("checkout")}
          onPress={() => navigation.navigate("checkout")}
          style={styles.buttonBrow}
        >
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
const radBehindButton = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    // backgroundColor: "coral",
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
  tittleCart: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionContent: {
    alignItems: "center",
    flex: 1,
    // backgroundColor: "red",
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
  rowBack: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "red",
    height: "100%",
  },
  behindButton: {
    height: radBehindButton,
    width: radBehindButton,
    borderRadius: radBehindButton / 2,
    backgroundColor: "#FFBA33",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
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

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = { deleteCartItem: deleteItem };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
