import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import PrimaryButton from "../components/UI/PrimaryButton";
import { removeAuth } from "../redux/AuthSlice";

function Landing(props) {
  const dispatch = useDispatch();
  function handler() {
    dispatch(removeAuth());
    console.log("........REMOVE.........");
  }
  return (
    <View>
      <PrimaryButton onPress={handler}>Logout</PrimaryButton>
    </View>
  );
}

export default Landing;
