import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const pieData = [
  { value: 70, color: "#177AD5" },
  { value: 30, color: "lightgray" },
];

export default function HomeCalories() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.innerHeader}>Calories</Text>
      <View style={styles.innerWrapper}>
        <View>
          <PieChart
            donut
            innerRadius={50}
            radius={70}
            data={pieData}
            centerLabelComponent={() => {
              return (
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 18 }}>2000</Text>
                  <Text style={{ fontSize: 14 }}>Remaining</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.lists}>
          <View style={styles.item}>
            <FontAwesome5 name="fire" size={20} color="black" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Goal</Text>
              <Text style={styles.value}>2500</Text>
            </View>
          </View>
          <View style={styles.item}>
            <FontAwesome5 name="walking" size={20} color="black" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Exercise</Text>
              <Text style={styles.value}>-500</Text>
            </View>
          </View>
          <View style={styles.item}>
            <FontAwesome5 name="utensils" size={20} color="black" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Food</Text>
              <Text style={styles.value}>2000</Text>
            </View>
          </View>
        </View>
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
    fontWeight: "bold",
    marginBottom: 10,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    maxHeight: 250,
    flexDirection: "column",
    justifyContent: "center",
  },
  innerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  lists: {
    gap: 4,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemText: {
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
    color: "gray",
  },
});
