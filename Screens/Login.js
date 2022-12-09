import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Background from "../components/Background";
import Card from "../components/UI/Card";
import Fields from "../components/UI/Fields";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constant/colors";
import { loginUser } from "../services/user-servic";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const data = {
    username: enteredEmail,
    password: enteredPassword,
  };
  function emailInputHandler(e) {
    setEnteredEmail(e);
    console.log(enteredEmail);
  }
  function passwordInputHandler(e) {
    setEnteredPassword(e);
    console.log(enteredPassword);
  }
  function navigateHandler() {
    props.navigation.navigate("Signup");
  }
  async function loginHandler() {
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      console.log("empty values are not allowed");
      return;
    } else {
      await loginUser(data)
        .then((jwtTokenData) => {
          console.log("user login: ");
          console.log(jwtTokenData);
          // props.navigation.navigate("Signup");
        })
        .catch((err) => {
          console.log(err);
          console.log("something went wrong");
          console.log(data);
        });
    }
    console.log(data);
    console.log("..............dddd");
    // login().then((resp) => {
    //   console.log(resp);
    //   if (
    //     resp[0].email === enteredEmail &&
    //     resp[0].password === enteredPassword
    //   ) {
    //     props.navigation.navigate("Home");
    //     console.log("...................");
    //   } else {
    //     console.log("password or email is incorrect");
    //     console.log(enteredEmail);
    //     console.log(enteredPassword);
    //     console.log(resp[0].email, "response email");
    //     console.log(resp[0].password, "response password");
    //   }
    // });
  }
  return (
    <Background>
      <View>
        <Title>Login</Title>
        <Card>
          <View style={styles.textP}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={{ color: Colors.primary600 }}>
              Login to Your Account
            </Text>
          </View>
          <Fields
            placeholder="Enter email"
            onChangeText={emailInputHandler}
            value={enteredEmail}
          />
          <Fields
            placeholder="Enter the password"
            secureTextEntry={true}
            onChangeText={passwordInputHandler}
            value={enteredPassword}
          />
          <Text style={styles.textStyle}>Forgot Password?</Text>
          <PrimaryButton onPress={loginHandler}>Login</PrimaryButton>
          <View style={styles.botomContainer}>
            <Text>Don't Have any account?</Text>
            <Pressable onPress={navigateHandler}>
              <Text
                style={{
                  color: Colors.primary600,
                  fontWeight: "bold",
                  paddingLeft: 4,
                }}
              >
                Signup
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
    marginBottom: "40%",
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
