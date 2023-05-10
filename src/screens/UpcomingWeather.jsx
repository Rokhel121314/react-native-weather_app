import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import UpcomingWeatherItem from "../components/UpcomingWeatherItem";

const UpcomingWeather = () => {
  const DATA = [
    {
      dt_text: "2023-05-08",
      main: {
        temp_max: 8.55,
        temp_min: 7.55,
      },
      weather: [
        {
          main: "Clear",
        },
      ],
    },
    {
      dt_text: "2023-05-08",
      main: {
        temp_max: 8.55,
        temp_min: 7.55,
      },
      weather: [
        {
          main: "Cloudy",
        },
      ],
    },
    {
      dt_text: "2023-05-08",
      main: {
        temp_max: 8.55,
        temp_min: 7.55,
      },
      weather: [
        {
          main: "Rainy",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/bg_images/sunny_clouds.jpg")}>
        <Text style={styles.headerText}>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          keyExtractor={(item) => {
            `${item.weather[0].main}+${item.dt_text}`;
          }}
          renderItem={({ item }) => (
            <UpcomingWeatherItem
              condition={item.weather[0].main}
              dt_text={item.dt_text}
              max={item.main.temp_max}
              min={item.main.temp_min}
            />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageBackground: {
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    marginBottom: 10,
  },
});
