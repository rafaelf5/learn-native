import React, { Children } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HomeProps, SignInProps, DetailsProps } from "./types";

import { AuthContext } from "./context";

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

export const Home = ({ navigation }: HomeProps) => (
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

export const Details = ({ route }: DetailsProps) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);

export const Search = ({ navigation }: any) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => alert("todo!")} />
    <Button title="React Native School" onPress={() => alert("todo!")} />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }: any) => {
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

export const SignIn = ({ navigation, route }: SignInProps) => {
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
