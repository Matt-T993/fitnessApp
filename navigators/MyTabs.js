import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
              iconName = focused ? "home" : "home-outline";
              break;
            case "Logs":
              iconName = focused ? "list" : "list-outline";
              break;
            case "Games":
              iconName = focused ? "handshake" : "handshake-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "help-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
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
        component={HomeScreen} // Change this to the screen you want to open
        options={{
          tabBarButton: (props) => (
            <FloatingTabButton {...props}>
              <Ionicons name="add" size={32} color="white" />
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
    top: -20, // Moves the button higher than the tab bar
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
  },
  floatingButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
  },
});

export default MyTabs;
