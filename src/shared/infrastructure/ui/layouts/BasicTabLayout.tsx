import React, { ReactNode } from "react";
import { DimensionValue, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type BasicTabLayoutProps = {
  children: ReactNode;
  paddingTop?: number;
  paddingBottom?: DimensionValue;
};

const BasicTabLayout = ({
  children,
  paddingTop = 0,
  paddingBottom = 0,
}: BasicTabLayoutProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.safeArea}>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top + paddingTop, paddingBottom },
        ]}
      >
        {children}
      </View>
    </View>
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

export default BasicTabLayout;
