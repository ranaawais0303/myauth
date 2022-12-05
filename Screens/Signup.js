import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Background from "../components/Background";
import Card from "../components/UI/Card";
import Fields from "../components/UI/Fields";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constant/colors";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [enteredName, setEnteredName] = useState("");

  function nameInputHandler(e) {
    setEnteredName(e);
    console.log(enteredName);
  }
  function emailInputHandler(e) {
    setEnteredEmail(e);
    console.log(enteredEmail);
  }
  function passwordInputHandler(e) {
    setEnteredPassword(e);
    console.log(enteredPassword);
  }
  function confirmPasswordInputHandler(e) {
    setEnteredConfirmPassword(e);
    console.log(enteredConfirmPassword);
  }
  function navigateHandler() {
    props.navigation.navigate("Login");
  }
  function signupHandler() {
    props.navigation.navigate("Login");
  }
  return (
    <Background>
      <View>
        <Title>Register</Title>
        <Card>
          <View style={styles.textP}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={{ color: Colors.primary600 }}>Create New Account</Text>
          </View>
          <Fields
            placeholder="Enter your name"
            onChangeText={nameInputHandler}
            value={enteredName}
          />
          <Fields
            placeholder="Enter email"
            onChangeText={emailInputHandler}
            value={enteredEmail}
          />
          <Fields
            placeholder="Enter the password"
            secureTextEntry={true}
            onChangeText={confirmPasswordInputHandler}
            value={enteredConfirmPassword}
          />
          <Fields
            placeholder="Confirm Password"
            onChangeText={passwordInputHandler}
            value={enteredPassword}
          />
          <Text style={styles.textStyle}></Text>
          <PrimaryButton onPress={signupHandler}>Signup</PrimaryButton>
          <View style={styles.botomContainer}>
            <Text>Already have an account?</Text>
            <Pressable onPress={navigateHandler}>
              <Text
                style={{
                  color: Colors.primary600,
                  fontWeight: "bold",
                  paddingLeft: 4,
                }}
              >
                Signin
              </Text>
            </Pressable>
          </View>
        </Card>
      </View>
    </Background>
  );
}

export default Login;

const styles = StyleSheet.create({
  textP: {
    alignItems: "center",
  },
  textStyle: {
    color: Colors.primary600,

    // width: "100%",

    textAlign: "right",
    fontWeight: "bold",
    marginBottom: "30%",
  },
  title: {
    color: Colors.primary600,
    fontSize: 40,
    fontWeight: "bold",
  },
  botomContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});