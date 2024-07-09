import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import AuthScreen from "@/auth/infrastructure/ui/screens/AuthScreen";
import BottomBar from "@/shared/infrastructure/ui/components/BottomBar";
import MyProfileScreen from "@/users/infrastructure/ui/screens/MyProfileScreen";

const Tab = createBottomTabNavigator();

const items = [
  {
    name: "Home",
    icon: "home-outline",
    selectedColor: "#0D9488",
    routeName: "HomeScreen",
  },
  {
    name: "Cart",
    icon: "cart-outline",
    selectedColor: "#0D9488",
    routeName: "OrderScreen",
  },
  {
    name: "Account",
    icon: "person-circle-outline",
    selectedColor: "#0D9488",
    routeName: "MyProfileScreen",
  },
];

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar items={items} {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* TODO: Fix type */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AuthScreen" component={AuthScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
