import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const UpcomingWeatherItem = (props) => {
  const { condition, dt_text, min, max } = props;
  return (
    <View style={styles.weatherItemContainer}>
      <Ionicons name="sunny" size={70} color="orange" />
      <Text style={styles.dateText}>{dt_text}</Text>
      <Text style={styles.minText}>{min}</Text>
      <Text style={styles.maxText}>{max}</Text>
    </View>
  );
};

export default UpcomingWeatherItem;

const styles = StyleSheet.create({
  weatherItemContainer: {
    flexDirection: "row",
    height: 100,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 24,
  },
  minText: {
    fontSize: 20,
  },
  maxText: {
    fontSize: 20,
  },
});
