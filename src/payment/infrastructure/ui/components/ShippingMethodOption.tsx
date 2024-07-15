import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ShippingMethod } from "../enums/shippingMethod.enum";

type AddressMethodOptionProps = {
  optionValue: ShippingMethod;
  method: string;
  isSelected: boolean;
  onSelect: (value: ShippingMethod) => void;
};

const ShippingMethodOption = ({
  optionValue,
  method,
  isSelected,
  onSelect,
}: AddressMethodOptionProps) => {
  return (
    <TouchableOpacity
      style={styles.addressMethodOption}
      onPress={() => onSelect(optionValue)}
    >
      <View style={styles.radioOption}>
        {isSelected && <View style={styles.selectedRadioButton} />}
      </View>
      <Text style={styles.methodOptionText}>{method}</Text>
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

export default ShippingMethodOption;
