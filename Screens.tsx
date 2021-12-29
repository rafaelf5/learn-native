import React, { Children } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SearchStackParamList, RootTabParamList } from "./types";

import { AuthContext } from "./context";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

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

export const Home = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
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
      <Button title="Drawer" onPress={() => alert("todo!")} />
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
      <Text>Search Screen</Text>
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

export const Profile = () => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => alert("todo!")} />
      <Button title="Sign Out" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert("todo!")} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};
