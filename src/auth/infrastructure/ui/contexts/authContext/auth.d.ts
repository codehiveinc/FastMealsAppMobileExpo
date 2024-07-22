export interface UserState {
  user_uuid: string | null;
  email: string | null;
}

export interface AuthState {
  user: UserState;
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  exp: number | null;
}

export interface AuthAction {
  type: string;
  payload: AuthState;
}

export interface TokenPayload {
  uuid: string;
  email: string;
  exp: number;
}
