import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Background from "./Background";

function Home() {
  return (
    <Background>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </Background>
  );
}
export default Home;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  text: { color: "white", fontSize: 65 },
  //   homeScreen: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  textContainer: {
    marginHorizontal: 40,
    marginVertical: 100,
  },
});
