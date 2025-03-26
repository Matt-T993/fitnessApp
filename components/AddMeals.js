import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function AddMeals() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 style={{}} name="utensils" size={25} color="black" />
        <FontAwesome5 style={{}} name="plus" size={20} color="black" />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.item}>
            <FontAwesome5 name="fire" size={20} color="black" />
            <Text style={styles.value}>2500 cal</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome5 name="tint" size={20} color="black" />
            <Text style={styles.value}>1.5L</Text>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 18, alignSelf: "flex-end", fontWeight: "bold" }}>
        Meals
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    gap: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    width: "90%",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",

    gap: 10,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
