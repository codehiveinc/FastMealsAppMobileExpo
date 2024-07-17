import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../consts/colors";
import { fonts } from "../consts/fonts";

type ImageFieldProps = {
  label: string;
  fileValueUrl: string;
  onChange: (text: string) => void;
  errorMessage?: string;
};

const ImageField = ({
  label,
  fileValueUrl,
  onChange,
  errorMessage: error,
}: ImageFieldProps) => {
  const pickFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  const removeFile = () => {
    onChange("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {fileValueUrl ? (
        <View
          style={[
            styles.fileContainer,
            { borderColor: error ? colors.error : colors.primary },
          ]}
        >
          <Image source={{ uri: fileValueUrl }} style={styles.image} />
          <TouchableOpacity style={styles.removeButton} onPress={removeFile}>
            <MaterialIcons name="close" size={20} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.outlineButton,
            { borderColor: error ? colors.error : colors.primary },
          ]}
          onPress={pickFile}
        >
          <MaterialIcons
            name="add-photo-alternate"
            size={24}
            color={error ? colors.error : colors.primary}
          />
          <Text
            style={[
              styles.outlineButtonText,
              { color: error ? colors.error : colors.primary },
            ]}
            disabled={error === undefined}
          >
            Seleccionar archivo
          </Text>
        </TouchableOpacity>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    gap: 10,
  },
  label: {
    fontFamily: fonts.primary,
    fontSize: 15,
    color: colors.gray,
  },
  outlineButton: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: fonts.primary,
  },
  fileContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 5,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    fontFamily: fonts.primary,
  },
});

export default ImageField;
