import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import MyTabs from "./navigators/MyTabs";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MyTabs />
      </SafeAreaView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
});
