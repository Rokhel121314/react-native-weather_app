import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    imageBackground,
    countryText,
    provinceText,
    populationContainer,
    populationText,
    riseSetContainer,
    timeText,
    setRiseContainer,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/bg_images/manila_city.jpg")}
        style={imageBackground}>
        <Text style={countryText}>Philippines</Text>
        <Text style={provinceText}>Manila</Text>

        <IconText
          iconName={"user"}
          iconColor={"red"}
          text={10_000}
          textStyles={populationText}
          iconTextContainerStyles={populationContainer}
        />

        <View style={riseSetContainer}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            text={"6:30:00 AM"}
            textStyles={timeText}
            iconTextContainerStyles={setRiseContainer}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            text={"7:00:00 PM"}
            textStyles={timeText}
            iconTextContainerStyles={setRiseContainer}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // marginTop: StatusBar.currentHeight || 0,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
  },
  countryText: {
    fontSize: 42,
    fontWeight: 800,
    letterSpacing: 2,
    color: "white",
  },
  provinceText: {
    fontSize: 40,
    fontWeight: 700,
    color: "white",
  },
  populationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 32,
    color: "white",
    marginLeft: 20,
  },
  riseSetContainer: {
    flexDirection: "row",
    marginTop: 50,
  },
  setRiseContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
  },
  timeText: {
    fontSize: 20,
    color: "white",
    marginLeft: 5,
  },
});
