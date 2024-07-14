import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type AppBarProps = {
  title?: string;
  titleColor?: string;
  leftIcon?: string;
  leftIconColor?: string;
  onLeftPress?: () => void;
  rightIcon?: string;
  rightIconColor?: string;
  onRightPress?: () => void;
};

const AppBar = ({
  title,
  titleColor,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  onLeftPress,
  onRightPress,
}: AppBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onLeftPress}>
          {leftIcon && (
            <Ionicons name={leftIcon} size={25} color={leftIconColor} />
          )}
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onRightPress}>
        {rightIcon && (
          <Ionicons name={rightIcon} size={28} color={rightIconColor} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 25,
  },
  separator: {
    width: 15,
  },
});

export default AppBar;
