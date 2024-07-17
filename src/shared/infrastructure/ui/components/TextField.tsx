import {
  DimensionValue,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors } from "../consts/colors";
import { fonts } from "../consts/fonts";

type TextFieldProps = {
  label: string;
  value: string;
  width?: DimensionValue;
  errorMessage?: string;
  placeholder: string;
  keyboadType?: "default" | "numeric" | "email-address" | "phone-pad";
  autoCapitalize?: "none" | "sentences";
  isPasswordField?: boolean;
  onChange: (text: string) => void;
};

export const TextField = ({
  label,
  placeholder,
  value,
  width,
  errorMessage,
  keyboadType = "default",
  autoCapitalize = "sentences",
  isPasswordField = false,
  onChange,
}: TextFieldProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[errorMessage ? styles.errorField : styles.field, { width }]}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.nativeEvent.text)}
        keyboardType={keyboadType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={isPasswordField}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary,
    fontSize: 15,
    color: colors.gray,
  },
  field: {
    fontFamily: fonts.primary,
    fontSize: 17,
    color: colors.black,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  errorField: {
    fontFamily: fonts.primary,
    fontSize: 17,
    borderBottomColor: colors.error,
    color: colors.error,
    borderBottomWidth: 0.5,
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  error: {
    fontFamily: fonts.primary,
    fontSize: 15,
    color: colors.error,
  },
});
