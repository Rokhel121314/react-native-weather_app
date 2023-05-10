import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, textStyles, text, iconTextContainerStyles } =
    props;
  return (
    <View style={iconTextContainerStyles}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={textStyles}>{text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({});
