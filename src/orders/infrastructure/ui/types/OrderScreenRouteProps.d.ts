import RootStackParamList from "@/shared/infrastructure/ui/types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type OrderScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "OrderScreen"
>;

export type MyOrdersHistoryScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "MyOrdersHistoryScreen"
>;

export type MyOrderHistoryScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "MyOrderHistoryScreen"
>;
