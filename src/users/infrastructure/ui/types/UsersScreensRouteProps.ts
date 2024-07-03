import RootStackParamList from "@/shared/infrastructure/ui/types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MyProfileScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "MyProfileScreen"
>;

export type PrivacyPolicyScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "PrivacyPolicyScreen"
>;
