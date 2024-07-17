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

export type MyRestaurantScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "MyRestaurantScreen"
>;

export type EditMealScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "EditMealScreen"
>;

export type UpdateUserScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "UpdateUserScreen"
>;
