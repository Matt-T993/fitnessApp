import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LogsScreen from "../screens/LogsScreen";
import GamesScreen from "../screens/GamesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

// Custom Floating Tab Button Component
const FloatingTabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.floatingButtonContainer}>{children}</View>
    </TouchableOpacity>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Logs":
              iconName = "list";
              break;
            case "Games":
              iconName = "handshake";
              break;
            case "Profile":
              iconName = "user";
              break;
            default:
              iconName = "question-circle";
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}
              solid={focused}
            />
          );
        },
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Logs" component={LogsScreen} />

      {/* Floating + Button in the Middle */}
      <Tab.Screen
        name="Add"
        component={HomeScreen} // Change to your desired screen
        options={{
          tabBarButton: (props) => (
            <FloatingTabButton {...props}>
              <FontAwesome5 name="plus" size={24} color="white" />
            </FloatingTabButton>
          ),
        }}
      />

      <Tab.Screen name="Games" component={GamesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 15, // distance from bottom of the screen
    alignSelf: "center", // center horizontally
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10, // ensure it's above the tab bar
  },

  floatingButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
  },
});

export default MyTabs;
