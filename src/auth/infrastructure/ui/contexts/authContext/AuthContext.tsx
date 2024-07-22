import { createContext } from "react";
import { AuthState } from "./auth";

interface AuthContextProps {
  authState: AuthState;
  login: (email: string, password: string) => void;
  newTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);
