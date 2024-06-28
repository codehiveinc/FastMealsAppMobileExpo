import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "../../../../shared/infrastructure/ui/types/RootStackParamList";

export type GetStartedScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "GetStartedScreen"
>;

export type HomeScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "HomeTabScreen"
>;
