import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { fonts } from "../consts/fonts";

type ButtonProps = {
  text: string;
  backgroundColor: string;
  textColor: string;
  width: DimensionValue;
  isDisabled?: boolean;
  handlePress: () => void;
};

const Button = ({
  text,
  backgroundColor,
  textColor,
  isDisabled,
  width,
  handlePress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor, width }]}
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
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Button;
