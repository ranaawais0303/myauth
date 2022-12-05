import React from "react";

import { TextInput, StyleSheet } from "react-native";

function Fields(props) {
  return <TextInput {...props} style={styles.textInput} />;
}

export default Fields;

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#c4d0fb",
    width: "100%",
    height: "8%",
    borderRadius: 6,
    padding: 10,
  },
});
