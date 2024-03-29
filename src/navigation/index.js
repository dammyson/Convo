import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Login,
  SignUp,
  Dashboard,
  Splash,
  ShowFullImg,
  Chat,
} from "../container";
import { color } from "../utility";
import PhoneAuthScreen from "../container/dashboard/PhoneAuthScreen";

const Stack = createStackNavigator();

const linking = {
  prefixes: ['https://mychat.com', 'mychat://'],
};


function NavContainer() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: color.DARK_GRAY },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTintColor: color.WHITE,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerLeft: null,
          }}
        />
            <Stack.Screen
          name="ShowFullImg"
          component={ShowFullImg}
          options={{
            headerBackTitle: null,
          }}
        />

<Stack.Screen
          name="PhoneAuthScreen"
          component={PhoneAuthScreen}
          options={{
            headerBackTitle: null,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerBackTitle: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavContainer;
