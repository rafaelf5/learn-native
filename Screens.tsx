import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  SearchStackParamList,
  RootTabParamList,
  HomeStackParamList,
  RootDrawerParamList,
  ProfileStackParamList,
  AuthStackParamList,
} from "./types";
import { AuthContext } from "./context";

import {
  CompositeNavigationProp,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

interface AuxChildren {
  children: React.ReactNode;
}

const ScreenContainer = ({ children }: AuxChildren) => (
  <View style={styles.container}>{children}</View>
);

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, "Home">,
  DrawerNavigationProp<RootDrawerParamList>
>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <ScreenContainer>
      <Text>Master List Screen</Text>
      <Button
        title="React Native by Example"
        onPress={() =>
          navigation.push("Details", { name: "React Native by Example" })
        }
      />
      <Button
        title="React Native School"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
  );
};

export const Details = () => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);

// https://benjaminwoojang.medium.com/react-navigation-with-typescript-270dfa8d5cad
// https://gist.github.com/wkddngus5/05fe4ea31b5ddb0695a0100231a46af2#file-homescreen-tsx

type SearchScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SearchStackParamList, "Search">,
  BottomTabNavigationProp<RootTabParamList>
>;

export const Search = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  return (
    <ScreenContainer>
      <Text>Search Screen test</Text>
      <Button title="Search 2" onPress={() => navigation.push("Search2")} />
      <Button
        title="React Native School"
        onPress={() =>
          navigation.navigate("HomeTab", {
            screen: "Details",
            params: {
              name: "React Native School",
            },
          })
        }
      />
    </ScreenContainer>
  );
};

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

type ProfileScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ProfileStackParamList, "Profile">,
  DrawerNavigationProp<RootDrawerParamList>
>;

export const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { signOut } = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

type SignInScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, "SignIn">,
  DrawerNavigationProp<RootDrawerParamList>
>;

export const SignIn = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const { signIn } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
