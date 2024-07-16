import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../consts/colors";

type BasicLayoutProps = {
  children: ReactNode;
  backgroundColor?: string;
};

const BasicLayout = ({ children, backgroundColor }: BasicLayoutProps) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: backgroundColor || colors.white },
      ]}
    >
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: "10%",
  },
});

export default BasicLayout;
