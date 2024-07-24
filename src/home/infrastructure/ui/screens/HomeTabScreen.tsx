import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import BottomBar from "@/shared/infrastructure/ui/components/BottomBar";
import MyProfileScreen from "@/users/infrastructure/ui/screens/MyProfileScreen";
import OrderScreen from "@/orders/infrastructure/ui/screens/OrderScreen";

export type HomeTabParamList = {
  HomeScreen: undefined;
  OrderScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar items={items} {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* TODO: Fix type */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

const items = [
  {
    name: "Home",
    icon: "home-outline",
    selectedColor: "#0D9488",
    routeName: "HomeScreen",
  },
  {
    name: "Order",
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



export default HomeTabScreen;
