import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts } from "../consts/fonts";

type ButtonProps = {
  text: string;
  backgroundColor: string;
  textColor: string;
  isDisabled?: boolean;
  handlePress: () => void;
};

const Button = ({
  text,
  backgroundColor,
  textColor,
  isDisabled,
  handlePress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      disabled={isDisabled}
      onPress={() => handlePress()}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    width: "70%",
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: 16,
  },
});

export default Button;
