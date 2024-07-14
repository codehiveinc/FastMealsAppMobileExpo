import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "@/shared/infrastructure/ui/types/RootStackParamList";


export type PaymentsScreenRouteProps = NativeStackScreenProps<
    RootStackParamList,
    "PaymentsScreen"
>;

export type PaymentMethodScreenRouteProps = NativeStackScreenProps<
    RootStackParamList,
    "PaymentMethodScreen"
>;