import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator } from "react-native";
import { View, StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

export default function App() {
  const { isLoading, weather, error } = useGetWeather();

  if (weather) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color={"tomato"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
