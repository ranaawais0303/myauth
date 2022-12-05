import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constant/colors";
function PrimaryButton({ btnlabel }) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text>{btnlabel}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: bgColor,
    borderRadius: 100,
    alignItems: "center",
    width: 250,
  },
  textLable: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
