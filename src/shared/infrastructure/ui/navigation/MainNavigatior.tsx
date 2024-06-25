import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStartedScreen from "../screens/GetStartedScreen";
import RootStackParamList from "../types/RootStackParamList";
import AuthScreen from "@/auth/infrastructure/ui/screens/AuthScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
