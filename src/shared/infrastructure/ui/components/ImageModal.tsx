import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";

type ImageModalProps = {
  isVisible: boolean;
  image: string;
  onClose: () => void;
};

const ImageModal = ({ isVisible, image, onClose }: ImageModalProps) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageModal;
