import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStackParamList from "../ui/types/RootStackParamList";
import AuthScreen from "@/auth/infrastructure/ui/screens/AuthScreen";
import GetStartedScreen from "@/home/infrastructure/ui/screens/GetStartedScreen";
import HomeTabScreen from "@/home/infrastructure/ui/screens/HomeTabScreen";
import SearchScreen from "@/restaurants/infrastructure/ui/screens/SearchScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
