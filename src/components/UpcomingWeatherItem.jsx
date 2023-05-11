import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const UpcomingWeatherItem = (props) => {
  const { condition, dt_txt, min, max } = props;
  return (
    <View style={styles.weatherItemContainer}>
      <Ionicons name={weatherType[condition].icon} size={70} color="black" />
      <View>
        <Text style={styles.dateText}>{`${moment(dt_txt).format(
          "dddd"
        )} `}</Text>
        <Text style={styles.dateText}>
          {moment(dt_txt).format("h:mm:ss a")}
        </Text>
      </View>

      <Text style={styles.minText}>{`${Math.floor(min)} °/ ${Math.ceil(
        max
      )} °`}</Text>
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
    fontSize: 20,
  },
  minText: {
    fontSize: 20,
  },
  maxText: {
    fontSize: 20,
  },
});
