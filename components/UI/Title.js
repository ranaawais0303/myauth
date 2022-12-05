import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constant/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    marginHorizontal: 40,
    marginVertical: 50,
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    padding: 12,
  },
});
