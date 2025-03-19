import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function FloatingTabButton() {
  return (
    <TouchableOpacity style={styles.floatingButton} activeOpacity={1}>
      <View style={styles.floatingButtonContainer}>
        <Ionicons name="add" size={32} color="white" />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 30, // Moves button higher than tab bar
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    width: 50,
    height: 50,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  floatingButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
  },
});
