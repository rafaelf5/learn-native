import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  RootTabParamList,
  HomeStackParamList,
  AuthStackParamList,
  SearchStackParamList,
} from "./types";

import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
} from "./Screens";

const Tabs = createBottomTabNavigator<RootTabParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const SearchStack = createStackNavigator<SearchStackParamList>();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route?.params?.name ?? "",
      })}
    ></HomeStack.Screen>
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search}></SearchStack.Screen>
    <SearchStack.Screen name="Search2" component={Search2}></SearchStack.Screen>
  </SearchStack.Navigator>
);
const ProfileStack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="HomeTab" component={HomeStackScreen}></Tabs.Screen>
      <Tabs.Screen name="SearchTab" component={SearchStackScreen}></Tabs.Screen>
    </Tabs.Navigator>
    {/* <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "Create Account" }}
      ></AuthStack.Screen>
    </AuthStack.Navigator> */}
  </NavigationContainer>
);

export default App;
