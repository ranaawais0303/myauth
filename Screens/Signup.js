import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { signup } from "../services/user-servic";
import Background from "../components/Background";
import Card from "../components/UI/Card";
import Fields from "../components/UI/Fields";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constant/colors";

function Signup(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [errors, setErrors] = useState({});

  ///////Reset Data
  function resetData() {
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmPassword("");
  }

  ////////////Handlers////////////
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

  ///Error Handler/////////////
  function handleError(errorMessage, input) {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  }

  //already have an account
  function navigateHandler() {
    props.navigation.navigate("Login");
  }
  function validate() {
    let valid = true;
    if (!enteredEmail) {
      handleError("please input email", "email");
      valid = false;
    } else if (
      !enteredEmail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      handleError("please input valid email", "email");
      valid = false;
    }
    if (!enteredPassword) {
      handleError("please input Password", "password");
      valid = false;
    } else if (enteredPassword.length < 5) {
      handleError("Min password length of 5", "password");
      valid = false;
    }

    if (!enteredName) {
      handleError("please input name", "name");
    }

    if (!enteredConfirmPassword) {
      handleError("please input confirm Password", "conPassword");
    } else if (enteredConfirmPassword !== enteredPassword) {
      handleError(
        "please confirm Password must be same as password",
        "conPassword"
      );
    }
    if (valid) {
      signupHandler();
    }
  }
  //for creating account
  async function signupHandler() {
    props.navigation.navigate("Login");

    await signup({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    })
      .then((resp) => {
        console.log(resp);
        console.log("success Log");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      })
      .finally(() => {
        resetData();
      });

    // props.navigation.navigate("Login");
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
            error={errors.name}
            onFocus={() => {
              handleError(null, "name");
            }}
          />
          <Fields
            placeholder="Enter email"
            onChangeText={emailInputHandler}
            value={enteredEmail}
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
          />
          <Fields
            placeholder="Enter the Password"
            onChangeText={passwordInputHandler}
            value={enteredPassword}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
          />
          <Fields
            placeholder="Confirm password"
            secureTextEntry={true}
            onChangeText={confirmPasswordInputHandler}
            value={enteredConfirmPassword}
            error={errors.conPassword}
            onFocus={() => {
              handleError(null, "conPassword");
            }}
          />
          <Text style={styles.textStyle}></Text>
          <PrimaryButton onPress={validate}>Signup</PrimaryButton>
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

export default Signup;

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
