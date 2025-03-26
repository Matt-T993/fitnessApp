import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeCalories from "../components/HomeCalories";
import AddExercise from "../components/AddExercise";
import AddMeals from "../components/AddMeals";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeCalories />
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <AddExercise />
        </View>
        <View style={styles.rightWrapper}>
          <AddMeals />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
    maxHeight: 150,
  },

  leftWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,

    alignItems: "center",
  },
  rightWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
});
