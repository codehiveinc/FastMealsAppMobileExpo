import { useContext } from "react";
import { AuthContext } from "../contexts/authContext/AuthContext";

export const useAuth = () => {
  const { authState, login, newTokens, logout } = useContext(AuthContext);

  return {
    authState,
    login,
    newTokens,
    logout,
  };
};
