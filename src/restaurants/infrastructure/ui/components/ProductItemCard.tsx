import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";
import {
  DimensionValue,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type ProductItemCardProps = {
  title: string;
  price: string;
  image: string;
  width: DimensionValue;
  onPress: () => void;
};

export const ProductItemCard = ({
  title,
  price,
  image,
  width,
  onPress,
}: ProductItemCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, { width }]} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 10,
    gap: 10,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowColor: colors.black,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: 16,
    fontWeight: "medium",
    textAlign: "center",
  },
  price: {
    fontFamily: fonts.primary,
    fontSize: 16,
    color: colors.primary,
  },
});
