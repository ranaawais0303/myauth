import React, { children } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

function Background({ children }) {
  return (
    <ImageBackground
      style={styles.rootScreen}
      source={require("../assets/Images/background.jpg")}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
}

export default Background;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    height: "100%",
  },
  child: { position: "absolute" },
});
