import React, { useState, useEffect, useMemo } from "react";
import { AuthContext, AuthContextType } from "./context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  RootTabParamList,
  HomeStackParamList,
  AuthStackParamList,
  SearchStackParamList,
  ProfileStackParamList,
  RootDrawerParamList,
} from "./types";

import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash,
} from "./Screens";

const TabsStack = createBottomTabNavigator<RootTabParamList>();

const AuthStack = createStackNavigator<AuthStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const SearchStack = createStackNavigator<SearchStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

const Drawer = createDrawerNavigator<RootDrawerParamList>();

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

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <TabsStack.Navigator screenOptions={{ headerShown: false }}>
      <TabsStack.Screen
        name="HomeTab"
        component={HomeStackScreen}
      ></TabsStack.Screen>
      <TabsStack.Screen
        name="SearchTab"
        component={SearchStackScreen}
      ></TabsStack.Screen>
    </TabsStack.Navigator>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("asdf");

  const authContext: AuthContextType = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken("");
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="User"
          >
            <Drawer.Screen name="Main" component={Tabs}></Drawer.Screen>
            <Drawer.Screen
              name="User"
              component={ProfileStackScreen}
            ></Drawer.Screen>
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator>
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
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
