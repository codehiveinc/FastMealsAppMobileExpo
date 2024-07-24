type RootStackParamList = {
  AuthScreen: undefined;
  GetStartedScreen: undefined;
  HomeTabScreen: undefined;
  SearchScreen: undefined;
  AuthScreen: undefined;
  MyProfileScreen: undefined;
  PrivacyPolicyScreen: undefined;
  RestaurantScreen: { restaurantId: number };
  MealDetailScreen: { mealId: number };
  OrderScreen: undefined;
  UpdateMealScreen: undefined;
  CreateMealScreen: undefined;
  UpdateUserScreen: undefined;
  CreateRestaurantScreen: undefined;
  MyRestaurantScreen: { restaurantId: number };
  MealDetailAdminScreen: undefined;
  PaymentScreen: { totalAmount: number };
  PaymentMethodScreen: undefined;
  MyRestaurantsScreen: undefined;
  MyMealsScreen: { restaurantId: number };
  MyOrdersHistoryScreen: undefined;
  MyOrderHistoryScreen: undefined;
  MyRestaurantStatisticsScreen: undefined;
  MyOrdersHistoryAdminScreen: undefined;
  OrderAdminScreen: undefined;
};

export default RootStackParamList;
