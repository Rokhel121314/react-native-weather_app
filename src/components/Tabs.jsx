import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

// screens
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInActiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "lightblue" },
        headerStyle: { backgroundColor: "lightblue" },
      }}>
      <Tab.Screen
        name="currentWeather"
        options={{
          headerTitle: "CURRENT WEATHER",
          headerTitleStyle: { color: "white", letterSpacing: 2 },
          headerTitleAlign: "center",
          title: "WEATHER",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}>
        {() => <CurrentWeather currentWeatherData={weather} />}
      </Tab.Screen>
      <Tab.Screen
        name="upcomingWeather"
        component={UpcomingWeather}
        options={{
          headerTitle: "CURRENT WEATHER",
          headerTitleStyle: { color: "white", letterSpacing: 2 },
          headerTitleAlign: "center",
          title: "CURRENT WEATHER",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="city"
        component={City}
        options={{
          headerTitle: "CITY",
          title: "CITY",
          headerTitleStyle: { color: "white", letterSpacing: 2 },
          headerTitleAlign: "center",

          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
