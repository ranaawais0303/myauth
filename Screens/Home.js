import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Background from "../components/Background";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

function Home(props) {
  async function loginHandler() {
    const value = await AsyncStorage.getItem("token");
    if (value) {
      props.navigation.navigate("Landing");
      console.log(".......Token.. is  apearlanding");
    } else {
      console.log("login", value);
      props.navigation.navigate("Login");
    }
  }
  function signupHandler() {
    props.navigation.navigate("Signup");
  }
  return (
    <Background>
      <View style={styles.textContainer}>
        <Title>Home Screen</Title>
        <PrimaryButton onPress={loginHandler}>Login</PrimaryButton>
        <PrimaryButton onPress={signupHandler}>Signup</PrimaryButton>
      </View>
    </Background>
  );
}
export default Home;

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 40,
    marginVertical: 100,
  },
});
