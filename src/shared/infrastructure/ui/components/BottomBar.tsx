import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

type Item = {
  name: string;
  icon: string;
  selectedColor: string;
  routeName: string;
};

interface BottomBarProps extends BottomTabBarProps {
  items: Item[];
}

const BottomBar = ({ items, navigation }: BottomBarProps) => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(0);
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelected(index);
            navigation.navigate(item.routeName);
          }}
        >
          <Ionicons
            name={item.icon}
            size={30}
            color={selected === index ? item.selectedColor : "#000"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingTop: 18,
  },
});

export default BottomBar;
