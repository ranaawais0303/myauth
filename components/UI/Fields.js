import React, { useState } from "react";

import { TextInput, StyleSheet, View, Text } from "react-native";

function Fields({ error, password, onFocus = () => {}, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  // const { onFocusprop } = props;
  return (
    <View>
      {/* <
        style={[
          styles.inputContainer,
         
        ]}
      > */}
      <TextInput
        {...props}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={[
          styles.textInput,
          { borderColor: error ? "red" : isFocused ? "#00008B" : "#c4d0fb" },
        ]}
      />

      {error && (
        <Text style={{ color: "red", fontSize: 12, marginBottom: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
}

export default Fields;

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    borderWidth: 0.5,
    paddingHorizontal: 15,
    marginVertical: 14,

    backgroundColor: "#c4d0fb",
  },
  textInput: {
    paddingHorizontal: 8,
    height: 40,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderColor: "grey",
    // borderColor:false
    backgroundColor: "#c4d0fb",
    // width: "100%",
    // height: "80%",
    borderRadius: 3,
  },
});
