import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Landing from "./Screens/Landing";
import { Provider } from "react-redux";
import MyStore from "./redux/MyStore";

function App() {
  const [data, setData] = useState({});
  const Stack = createNativeStackNavigator();

  function dataset(data) {
    setData(data);
  }
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  homeScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
