import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "@/auth/infrastructure/ui/screens/AuthScreen";
import GetStartedScreen from "@/home/infrastructure/ui/screens/GetStartedScreen";
import HomeTabScreen from "@/home/infrastructure/ui/screens/HomeTabScreen";
import SearchScreen from "@/restaurants/infrastructure/ui/screens/SearchScreen";
import PrivacyPolicyScreen from "@/users/infrastructure/ui/screens/PrivacyPolicyScreen";
import RestaurantScreen from "@/restaurants/infrastructure/ui/screens/RestaurantScreen";
import MealDetailScreen from "@/restaurants/infrastructure/ui/screens/MealDetailScreen";
import UpdateMealScreen from "@/restaurants/infrastructure/ui/screens/UpdateMealScreen";
import CreateMealScreen from "@/restaurants/infrastructure/ui/screens/CreateMealScreen";
import CreateRestaurantScreen from "@/restaurants/infrastructure/ui/screens/CreateRestaurantScreen";
import PaymentMethodScreen from "@/payment/infrastructure/ui/screens/PaymentMethodScreen";
import MyRestaurantsScreen from "@/restaurants/infrastructure/ui/screens/MyRestaurantsScreen";
import RootStackParamList from "../ui/types/RootStackParamList";
import UpdateUserScreen from "@/users/infrastructure/ui/screens/UpdateUserScreen";
import PaymentScreen from "@/payment/infrastructure/ui/screens/PaymentScreen";
import MealDetailAdminScreen from "@/restaurants/infrastructure/ui/screens/MealDetailAdminScreen";
import MyMealsScreen from "@/restaurants/infrastructure/ui/screens/MyMealsScreen";
import MyRestaurantScreen from "@/restaurants/infrastructure/ui/screens/MyRestaurantScreen";
import MyRestaurantStatisticsScreen from "@/restaurants/infrastructure/ui/screens/MyRestaurantStatistics";
import MyOrdersHistoryScreen from "@/orders/infrastructure/ui/screens/MyOrdersHistoryScreen";
import MyOrderHistoryScreen from "@/orders/infrastructure/ui/screens/MyOrderHistoryScreen";
import MyOrdersHistoryAdminScreen from "@/orders/infrastructure/ui/screens/MyOrdersHistoryAdminScreen";
import OrderAdminScreen from "@/orders/infrastructure/ui/screens/OrderAdminScreen";
import OrderScreen from '@/orders/infrastructure/ui/screens/OrderScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStartedScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="HomeTabScreen" component={HomeTabScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="UpdateMealScreen" component={UpdateMealScreen} />
        <Stack.Screen name="CreateMealScreen" component={CreateMealScreen} />
        <Stack.Screen name="UpdateUserScreen" component={UpdateUserScreen} />
        <Stack.Screen
          name="CreateRestaurantScreen"
          component={CreateRestaurantScreen}
        />
        <Stack.Screen
          name="MyRestaurantScreen"
          component={MyRestaurantScreen}
        />
        <Stack.Screen
          name="MealDetailAdminScreen"
          component={MealDetailAdminScreen}
        />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen
          name="MyRestaurantsScreen"
          component={MyRestaurantsScreen}
        />
        <Stack.Screen name="MyMealsScreen" component={MyMealsScreen} />
        <Stack.Screen
          name="MyOrdersHistoryScreen"
          component={MyOrdersHistoryScreen}
        />
        <Stack.Screen
          name="MyOrderHistoryScreen"
          component={MyOrderHistoryScreen}
        />
        <Stack.Screen
          name="MyRestaurantStatisticsScreen"
          component={MyRestaurantStatisticsScreen}
        />
        <Stack.Screen
          name="MyOrdersHistoryAdminScreen"
          component={MyOrdersHistoryAdminScreen}
        />
        <Stack.Screen name="OrderAdminScreen" component={OrderAdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
