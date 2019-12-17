import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from "react-native";
import { Audio } from "expo-av";

const listBgColors = {
  1: "#AE1438",
  2: "#3498DB",
  3: "#67E6DC",
  4: "#EEC213",
  5: "#2C3335",
  6: "#E74292",
  7: "#3498DB",
  8: "#8395A7",
  9: "#0A3D62",
  10: "#1287A5"
};
const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};
const translation = {
  one: "uno",
  two: "dos",
  three: "tres",
  four: "cuatro",
  five: "cinco",
  six: "seis",
  seven: "siete",
  eight: "ocho",
  nine: "nueve",
  ten: "diez"
};

class App extends Component {
  spellIt = number => {
    ToastAndroid.showWithGravityAndOffset(
      translation[number],
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      250
    );
  };

  playTheSound = async soundNumber => {
    const soundObject = new Audio.Sound();
    try {
      const path = soundList[soundNumber];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          this.spellIt(soundNumber);
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log("playSound error: ", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gridContainer}>
          <Image
            style={styles.logo}
            source={require("./assets/logo.png")}
          ></Image>
          <Text style={styles.title}>Learn spanish numbers !</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[1] }]}
              onPress={() => this.playTheSound("one")}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[2] }]}
              onPress={() => this.playTheSound("two")}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[3] }]}
              onPress={() => this.playTheSound("three")}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[4] }]}
              onPress={() => this.playTheSound("four")}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[5] }]}
              onPress={() => this.playTheSound("five")}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[6] }]}
              onPress={() => this.playTheSound("six")}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[7] }]}
              onPress={() => this.playTheSound("seven")}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[8] }]}
              onPress={() => this.playTheSound("eight")}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[9] }]}
              onPress={() => this.playTheSound("nine")}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, { backgroundColor: listBgColors[10] }]}
              onPress={() => this.playTheSound("ten")}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // ScrollView does't support alignItems and justifyContent
    // alignItems: "center",
    // justifyContent: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    marginTop: 20,
    alignSelf: "center"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 15
  },
  item: {
    flex: 1,
    height: 150,
    margin: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  itemText: {
    color: "white",
    fontSize: 20
  }
});
