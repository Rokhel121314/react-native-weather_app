import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <ImageBackground
        source={require("../../assets/bg_images/sunny_clouds.jpg")}
        style={styles.bgImage}>
        <View style={styles.weatherContainer}>
          <Octicons name="sun" size={150} color="orange" />
          <Text style={styles.temperature}>6 </Text>
          <Text style={styles.temperatureFeels}>Feels like 5</Text>
          <View style={styles.highLowContainer}>
            <Text style={styles.highLowText}>High: 32</Text>
            <Text style={styles.highLowText}>Low: 25</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.weatherStatus}>Its sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight || 0,
  },
  bgImage: {
    flex: 1,
  },
  weatherContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    fontSize: 120,
    fontWeight: 400,
    // color: "white",
  },
  temperatureFeels: {
    fontSize: 48,
    // color: "white",
  },
  highLowContainer: {
    flexDirection: "row",
  },
  highLowText: {
    fontSize: 32,
    marginHorizontal: 10,
    // color: "white",
  },
  statusContainer: {
    paddingHorizontal: 20,
  },
  weatherStatus: {
    fontSize: 36,
    // color: "white",
  },
  message: {
    fontSize: 28,
    // color: "white",
  },
});
