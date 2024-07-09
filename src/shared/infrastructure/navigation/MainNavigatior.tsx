import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStackParamList from "../ui/types/RootStackParamList";
import AuthScreen from "@/auth/infrastructure/ui/screens/AuthScreen";
import GetStartedScreen from "@/home/infrastructure/ui/screens/GetStartedScreen";
import HomeTabScreen from "@/home/infrastructure/ui/screens/HomeTabScreen";
import SearchScreen from "@/restaurants/infrastructure/ui/screens/SearchScreen";
import PrivacyPolicyScreen from "@/users/infrastructure/ui/screens/PrivacyPolicyScreen";
import RestaurantScreen from "@/restaurants/infrastructure/ui/screens/RestaurantScreen"
import MealDetailScreen from "@/restaurants/infrastructure/ui/screens/MealDetailScreen";
import OrderScreen from "@/orders/infrastructure/ui/Screens/OrderScreen";
import UpdateMealScreen from "@/restaurants/infrastructure/ui/screens/UpdateMealScreen";
import CreateMealScreen from "@/restaurants/infrastructure/ui/screens/CreateMealScreen";
import UpdateUserScreen from "@/users/infrastructure/ui/UpdateUserScreen";
import CreateRestaurantScreen from "@/restaurants/infrastructure/ui/screens/CreateRestaurantScreen";

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
        <Stack.Screen name="UpdateMealScreen" component={UpdateMealScreen}/>
        <Stack.Screen name="CreateMealScreen" component={CreateMealScreen}/>
        <Stack.Screen name="UpdateUserScreen" component={UpdateUserScreen}/>
        <Stack.Screen name="CreateRestaurantScreen" component={CreateRestaurantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;