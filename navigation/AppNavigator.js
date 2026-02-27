import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ExampleEvent from "../screens/ExampleEvent";
import counter from "../screens/counter";
import AboutMe from "../screens/AboutMe";
import FavFood from "../screens/FavFood";
import FavMov from "../screens/FavMov";

const stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#70b2f0" },
          headerTitleStyle: {
            fontSize: 40,
            color: "white",
          },
        }}
      />
      <stack.Screen
        name="ExampleEvent"
        component={ExampleEvent}
        options={{
          title: "ExampleEvent",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#70b2f0" },
          headerTitleStyle: {
            fontSize: 40,
            color: "white",
          },
        }}
      />
      <stack.Screen
        name="Counter"
        component={counter}
        options={{
          title: "Counter",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#70b2f0" },
          headerTitleStyle: {
            fontSize: 40,
            color: "white",
          },
        }}
      />
      <stack.Screen
        name="AboutMe"
        component={AboutMe}
        options={{
          title: "About Me",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#70b2f0" },
          headerTitleStyle: {
            fontSize: 40,
            color: "white",
          },
        }}
      />
      <stack.Screen
        name="FavFood"
        component={FavFood}
        options={{
          title: "Comidas favoritas",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#70b2f0" },
          headerTitleStyle: {
            fontSize: 40,
            color: "white",
          },
        }}
      />
      <stack.Screen
        name="FavMov"
        component={FavMov}
        options={{
          title: "Peliculas favoritas",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#70b2f0" },
          headerTitleStyle: {
            fontSize: 40,
            color: "white",
          },
        }}
      />
    </stack.Navigator>
  );
}
