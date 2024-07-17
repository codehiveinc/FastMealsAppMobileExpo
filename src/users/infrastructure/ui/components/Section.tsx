import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type SectionProps = {
  handlePress: () => void;
  title: string;
};

export const Section = ({ title, handlePress }: SectionProps) => {
  return (
    <TouchableOpacity
      style={styles.userSectionContainer}
      onPress={() => handlePress()}
      key={title}
    >
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="chevron-forward" size={20} color={colors.black} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userSectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: 16,
  },
});
