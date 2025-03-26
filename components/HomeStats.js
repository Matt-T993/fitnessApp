import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";

export default function HomeStats() {
  const calorieData = [
    { value: 1800, label: "Mon" },
    { value: 2000, label: "Tue" },
    { value: 1700, label: "Wed" },
    { value: 2200, label: "Thu" },
    { value: 2100, label: "Fri" },
    { value: 1900, label: "Sat" },
    { value: 2300, label: "Sun" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Calorie Intake</Text>
      <LineChart
        data={calorieData}
        curved
        isAnimated
        animationDuration={1200}
        height={200}
        thickness={2}
        color="#4E8DF5"
        hideDataPoints={false}
        dataPointsColor="#4E8DF5"
        startFillColor="rgba(78, 141, 245, 0.3)"
        endFillColor="rgba(78, 141, 245, 0.01)"
        areaChart
        yAxisColor="gray"
        xAxisColor="gray"
        yAxisTextStyle={{ color: "gray" }}
        xAxisLabelTextStyle={{ color: "gray" }}
        noOfSections={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
