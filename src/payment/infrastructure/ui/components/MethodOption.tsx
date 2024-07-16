import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MethodOptionProps = {
  optionValue: string;
  methodName: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
};

const MethodOption = ({
  optionValue,
  methodName,
  isSelected,
  onSelect,
}: MethodOptionProps) => {
  return (
    <TouchableOpacity
      style={styles.addressMethodOption}
      onPress={() => onSelect(optionValue)}
    >
      <View style={styles.radioOption}>
        {isSelected && <View style={styles.selectedRadioButton} />}
      </View>
      <Text style={styles.methodOptionText}>{methodName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addressMethodOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioOption: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#0C9488",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedRadioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0C9488",
  },
  methodOptionText: {
    fontSize: 16,
  },
});

export default MethodOption;
