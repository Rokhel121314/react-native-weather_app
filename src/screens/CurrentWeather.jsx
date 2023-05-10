import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({ currentWeatherData }) {
  const {
    mainWrapper,
    bgImage,
    weatherContainer,
    temperatureStyle,
    temperatureFeels,
    highLowContainer,
    highLowText,
    statusContainer,
    weatherStatus,
    message,
  } = styles;

  const [weatherCondition, setWeatherCondition] = useState("Snow");
  console.log("currentWeatheer", currentWeatherData);

  useEffect(() => {
    if (!currentWeatherData) {
      return;
    } else {
      // setWeatherCondition(currentWeatherData.list[0].weather[0].main);
    }
  }, []);

  console.log("bg", weatherType[weatherCondition].backgroundColor);
  return (
    <SafeAreaView
      style={{
        backgroundColor: weatherType[weatherCondition].backgroundColor,
        flex: 1,
      }}>
      <View style={weatherContainer}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={150}
          color="orange"
        />
        <Text style={temperatureStyle}>6 </Text>
        <Text style={temperatureFeels}>Feels like 5</Text>
        <View style={highLowContainer}>
          <Text style={highLowText}>High: 32</Text>
          <Text style={highLowText}>Low: 25</Text>
        </View>
      </View>
      <View style={statusContainer}>
        <Text style={weatherStatus}>Its sunny</Text>
        <Text style={message}>{weatherType[weatherCondition].message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "black",
    // marginTop: StatusBar.currentHeight || 0,
  },
  bgImage: {
    flex: 1,
  },
  weatherContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temperatureStyle: {
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
