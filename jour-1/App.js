import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { color } from "react-native-reanimated";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.x}>
        <Text style={styles.y}>Hello this my text 1</Text>
        <Text style={styles.styleT}>Hello this my text 2</Text>
        <Text style={styles.txtGras}>Hello this my text 3</Text>
        <Image
          source={{uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png", }}style={styles.img1} />
        <Image source={require("./img2/ko.png")} style={styles.img2} />
        <Pressable onPress={() => { alert("hello"); }} >
          <Text style={styles.pressStyle}>Click d !!!</Text>
        </Pressable>
        <ActivityIndicator></ActivityIndicator>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  x: {
    backgroundColor: "white",
    width: 1200,
    height: 500,
    marginTop: 100,
    marginBottom:100,
  },
  styleT: {
    textAlign: "center",
    color: "red",
  },
  txtGras: {
    // fontWeight: "bolder",
  },
  y: {
    fontSize: 33,
  },
  img1: {
    width: 150,
    height: 50,
    padding: 5,
    margin: 5,
  },
  img2: { width: 150, height: 50 },
  pressStyle: {
    paddingTop: 20,
  },
 
});
