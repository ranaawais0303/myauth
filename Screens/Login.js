import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import Background from "../components/Background";
import Card from "../components/UI/Card";
import Fields from "../components/UI/Fields";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constant/colors";
import { loginUser } from "../services/user-servic";
import { addAuth } from "../redux/AuthSlice";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState({});

  // /Redux functionality
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.auth);

  /////////////////
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

  function handleError(errorMessage, input) {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  }
  /////
  function navigateHandler() {
    props.navigation.navigate("Signup");
  }
  ////////
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
    if (valid) {
      loginHandler();
    }
  }

  /////
  async function loginHandler() {
    await loginUser(data)
      .then((jwtTokenData) => {
        console.log("user login: ");
        console.log(jwtTokenData.token);
        dispatch(addAuth(jwtTokenData.token));
        console.log("................", addedItems);
        // props.data(jwtTokenData);

        if (!jwtTokenData.token) {
          props.navigation.navigate("Landing");
          console.log("...Landing.......");
        }
      })
      .catch((err) => {
        Alert.alert("email or password is incorrect");
        console.log(err.message);
      });
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
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
          />
          <Fields
            placeholder="Enter the password"
            secureTextEntry={true}
            onChangeText={passwordInputHandler}
            value={enteredPassword}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
          />
          <Text style={styles.textStyle}>Forgot Password?</Text>
          <PrimaryButton onPress={validate}>Login</PrimaryButton>
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
