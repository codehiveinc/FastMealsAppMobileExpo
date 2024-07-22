interface AuthProps {
  authState: {
    accessToken: string;
    refreshToken: string;
    userUuid: string;
    authenticated: boolean;
  };
  onRegister: (email: string, password: string) => void;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

class AuthContext {}

export default AuthContext;
