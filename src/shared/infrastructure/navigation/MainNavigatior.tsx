import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "@/auth/infrastructure/ui/screens/AuthScreen";
import GetStartedScreen from "@/home/infrastructure/ui/screens/GetStartedScreen";
import HomeTabScreen from "@/home/infrastructure/ui/screens/HomeTabScreen";
import SearchScreen from "@/restaurants/infrastructure/ui/screens/SearchScreen";
import PrivacyPolicyScreen from "@/users/infrastructure/ui/screens/PrivacyPolicyScreen";
import RestaurantScreen from "@/restaurants/infrastructure/ui/screens/RestaurantScreen";
import MealDetailScreen from "@/restaurants/infrastructure/ui/screens/MealDetailScreen";
import OrderScreen from "@/orders/infrastructure/ui/Screens/OrderScreen";
<<<<<<< HEAD
import UpdateMealScreen from "@/restaurants/infrastructure/ui/screens/UpdateMealScreen";
import CreateMealScreen from "@/restaurants/infrastructure/ui/screens/CreateMealScreen";
import UpdateUserScreen from "@/users/infrastructure/ui/UpdateUserScreen";
import CreateRestaurantScreen from "@/restaurants/infrastructure/ui/screens/CreateRestaurantScreen";
import MyRestaurantScreen from "@/users/infrastructure/ui/screens/MyRestaurantScreen";
import EditMealScreen from "@/users/infrastructure/ui/screens/EditMealScreen";
import PaymentsScreen from "@/payment/infrastructure/ui/screens/PaymentsScreen";
import PaymentMethodScreen from "@/payment/infrastructure/ui/screens/PaymentMethodScreen";
=======
import MyRestaurantsScreen from "@/restaurants/infrastructure/ui/screens/MyRestaurantsScreen";
import RootStackParamList from "../ui/types/RootStackParamList";
>>>>>>> 25dad25 (feat(MyRestaurants): Add MyRestaurantsScreen)

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
        <Stack.Screen name="MyRestaurantScreen" component={MyRestaurantScreen} />
        <Stack.Screen name="EditMealScreen" component={EditMealScreen} />
        <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
        <Stack.Screen
          name="MyRestaurantsScreen"
          component={MyRestaurantsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
