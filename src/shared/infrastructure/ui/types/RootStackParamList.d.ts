type RootStackParamList = {
  AuthScreen: undefined;
  GetStartedScreen: undefined;
  HomeTabScreen: undefined;
  SearchScreen: undefined;
  AuthScreen: undefined;
  MyProfileScreen: undefined;
  PrivacyPolicyScreen: undefined;
  RestaurantScreen: undefined;
  MealDetailScreen: undefined;
  OrderScreen: undefined;
  UpdateMealScreen: undefined;
  CreateMealScreen: undefined;
  UpdateUserScreen: {
    userUuid: string;
    firstName: string;
    lastName: string;
    cellphone: string;
  };
  CreateRestaurantScreen: undefined;
  MyRestaurantScreen: undefined;
  MealDetailAdminScreen: undefined;
  PaymentScreen: undefined;
  PaymentMethodScreen: undefined;
  MyRestaurantsScreen: undefined;
  MyMealsScreen: undefined;
  MyOrdersHistoryScreen: undefined;
  MyOrderHistoryScreen: {
    orderUuid: string;
  };
  MyRestaurantStatisticsScreen: undefined;
  MyOrdersHistoryAdminScreen: undefined;
  OrderAdminScreen: undefined;
};

export default RootStackParamList;
