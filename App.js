import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import WeatherContext from "./context/WeatherApi";

export default function App() {
  return (
    <WeatherContext>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </WeatherContext>
  );
}
