import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";

const pieData = [
  { value: 70, color: "#177AD5" },
  { value: 30, color: "lightgray" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.carosol}>
        <Text style={styles.innerHeader}>Calories</Text>
        <PieChart
          donut
          innerRadius={50}
          radius={70}
          data={pieData}
          centerLabelComponent={() => {
            return (
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 18 }}>2000 </Text>
                <Text style={{ fontSize: 14 }}>Remaining</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerHeader: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 10,
  },
  carosol: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxHeight: 250,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
