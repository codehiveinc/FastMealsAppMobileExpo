import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";

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
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelected(index);
            navigation.navigate(item.routeName);
          }}
        >
          <MaterialCommunityIcons
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
    paddingVertical: 30,
  },
});

export default BottomBar;
