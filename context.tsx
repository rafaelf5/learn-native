import React from "react";

export interface AuthContextType {
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});
