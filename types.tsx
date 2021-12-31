import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParamList = {
  Details: { name: string; title?: string } | undefined;
  Home: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  Search2: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  SearchTab: NavigatorScreenParams<SearchStackParamList>;
};

export type RootDrawerParamList = {
  Main: NavigatorScreenParams<RootTabParamList>;
  User: NavigatorScreenParams<ProfileStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
