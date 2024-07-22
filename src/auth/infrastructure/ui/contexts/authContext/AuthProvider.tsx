import { jwtDecode } from "jwt-decode";
import { AuthState, TokenPayload, UserState } from "./auth";
import { useReducer } from "react";
import { authReducer } from "../../reducers/authReducer";
import { AUTHENTICATED, LOGOUT, REFRESH } from "../../reducers/actionTypes";
import { AuthContext } from "./AuthContext";
import * as SecureStore from "expo-secure-store";

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

const USER_INITAL_STATE: UserState = {
  user_uuid: null,
  email: null,
};

export const INITIAL_STATE: AuthState = {
  user: USER_INITAL_STATE,
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  exp: null,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const init = (initialState: AuthState): AuthState => {
    const accessToken = SecureStore.getItem("accessToken");
    const refreshToken = SecureStore.getItem("refreshToken");

    if (accessToken === null || refreshToken === null) {
      return initialState;
    }

    const payload = jwtDecode<TokenPayload>(accessToken);

    const { uuid: user_uuid, email } = payload;

    return {
      ...initialState,
      user: { user_uuid, email },
      accessToken,
      refreshToken,
      isAuthenticated: true,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

  const setToken = (accessToken: string, refreshToken: string): void => {
    SecureStore.setItem("accessToken", accessToken);
    SecureStore.setItem("refreshToken", refreshToken);
  };

  const deleteToken = () => {
    SecureStore.deleteItemAsync("accessToken");
    SecureStore.deleteItemAsync("refreshToken");
  };

  const newTokens = (accessToken: string, refreshToken: string): void => {
    setToken(accessToken, refreshToken);
    dispatch({
      type: REFRESH,
      payload: { ...INITIAL_STATE, accessToken, refreshToken },
    });
  };

  const login = (accessToken: string, refreshToken: string) => {
    setToken(accessToken, refreshToken);
    const payload = jwtDecode<TokenPayload>(accessToken);

    const { uuid: user_uuid, email, exp } = payload;

    const user: UserState = {
      user_uuid,
      email,
    };

    const newAuth: AuthState = {
      user,
      isAuthenticated: true,
      accessToken,
      refreshToken,
      exp,
    };

    dispatch({ type: AUTHENTICATED, payload: newAuth });
  };

  const logout = () => {
    dispatch({ type: LOGOUT, payload: INITIAL_STATE });
    deleteToken();
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        newTokens,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
