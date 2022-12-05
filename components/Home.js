import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Background from "./Background";
import PrimaryButton from "./UI/PrimaryButton";
import Title from "./UI/Title";

function Home(props) {
  function loginHandler() {
    console.log("pressed");
    props.navigation.navigate("Login");
  }
  function signupHandler() {
    props.navigation.navigate("Signup");
  }
  return (
    <Background>
      <View style={styles.textContainer}>
        <Title>Home Screen</Title>
        <PrimaryButton onPress={loginHandler}>Login</PrimaryButton>
        <PrimaryButton onPress={signupHandler}>Signup</PrimaryButton>
      </View>
    </Background>
  );
}
export default Home;

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 40,
    marginVertical: 100,
  },
});
