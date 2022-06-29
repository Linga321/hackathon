import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "../view/LoginScreen";
import HomeScreen from "../view/HomeScreen";
import LoadingView from "../components/LoadingView";
import ProfileScreen from "../view/ProfileScreen";
import style from "../context/style";
import RegisterScreen from "../view/RegisterScreen";
import MapScreen from "../view/MapScreen";
import { COLORS } from "../styles/theme";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const [onGoing, success] = useState(true);
  return onGoing ? (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarActiveBackgroundColor: "#eb2a9e",
        tabBarActiveTintColor: "#e91e63",
        barStyle: {
          backgroundColor: "#F9F9F9",
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Activ Tracker",
          headerTintColor: "#32A2A4",
          headerStyle: {
            backgroundColor: COLORS.primary,
            // fontWeight: "bold",
          },
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map View"
        component={MapScreen}
        options={{
          title: "Activ Tracker",
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: COLORS.primary,
            fontWeight: "bold",
          },
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Activ Tracker",
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: COLORS.primary,
            // fontWeight: "bold",
            // fontSize: 30,
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
