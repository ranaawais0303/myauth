import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import PrimaryButton from "../components/UI/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { removeAuth } from "../redux/AuthSlice";
import { allUser } from "../services/user-servic";
import { View, StyleSheet, Text, FlatList } from "react-native";
function Landing(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    allUser().then((res) => setData(res));
  }, []);

  // const dispatch = useDispatch();

  ///////////////////
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      // remove error
      console.log("......not removed");
    }

    console.log("Done.");
  };

  /////////

  async function handler() {
    // dispatch(removeAuth());
    console.log("........REMOVE.........");
    await removeValue();
    props.navigation.navigate("Login");
  }
  return (
    <View style={styles.mainContainer}>
      <PrimaryButton onPress={handler}>Logout</PrimaryButton>
      <View style={styles.container}>
        <Text>sjdfkajskj</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 50,
  },
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
