import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ExampleEvent from "../screens/ExampleEvent";
import counter from "../screens/counter";
import AboutMe from "../screens/AboutMe";

const stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <stack.Screen
        name="ExampleEvent"
        component={ExampleEvent}
        options={{ title: "ExampleEvent" }}
      />
      <stack.Screen
        name="Counter"
        component={counter}
        options={{ title: "Counter" }}
      />
      <stack.Screen
        name="AboutMe"
        component={AboutMe}
        options={{ title: "About Me" }}
      />
    </stack.Navigator>
  );
}
