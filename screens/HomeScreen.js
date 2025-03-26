import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeCalories from "../components/HomeCalories";
import AddExercise from "../components/AddExercise";
import AddMeals from "../components/AddMeals";
import HomeStats from "../components/HomeStats";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.topArea}>
        <HomeCalories />
      </View>

      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <AddExercise />
        </View>
        <View style={styles.rightWrapper}>
          <AddMeals />
        </View>
      </View>

      <View style={styles.bottomArea}>
        <HomeStats />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    gap: 20,
    paddingBottom: 20,
  },
  topArea: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  bottomArea: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
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
