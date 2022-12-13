import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
// import Colors from "../../constant/colors";

function Card({ children }) {
  return (
    <ScrollView>
      <View style={styles.inputContainer}>{children}</View>
    </ScrollView>
  );
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 30,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: Colors.primary500,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
  },
});
