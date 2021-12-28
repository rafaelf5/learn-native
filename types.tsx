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

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  SearchTab: NavigatorScreenParams<SearchStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
