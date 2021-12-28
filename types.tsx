import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
  Details: { name: string; title?: string } | undefined;
  Home: undefined;
  Search: undefined;
  Search2: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;
export type DetailsProps = StackScreenProps<RootStackParamList, "Details">;
export type SignInProps = StackScreenProps<RootStackParamList, "SignIn">;
