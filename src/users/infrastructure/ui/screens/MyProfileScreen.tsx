import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrivacyPolicy from "../components/PrivacyPolicy";

const MyProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PrivacyPolicy />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyProfileScreen;
