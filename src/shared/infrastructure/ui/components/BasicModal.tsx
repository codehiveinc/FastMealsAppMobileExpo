import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/shared/infrastructure/ui/consts/colors";
import { fonts } from "@/shared/infrastructure/ui/consts/fonts";

type BasicModalProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
  primaryButtonText: string;
  onPrimaryButtonPress: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonPress?: () => void;
};

export const BasicModal = ({
  visible,
  message,
  onClose,
  primaryButtonText,
  onPrimaryButtonPress,
  secondaryButtonText,
  onSecondaryButtonPress,
}: BasicModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.buttonContainer}>
            {secondaryButtonText && (
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={onSecondaryButtonPress}
              >
                <Text style={styles.secondaryButtonText}>
                  {secondaryButtonText}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={onPrimaryButtonPress}
            >
              <Text style={styles.primaryButtonText}>{primaryButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    gap: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: fonts.primary,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 15,
    elevation: 2,
    minWidth: "40%",
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    padding: 10,
  },
  primaryButtonText: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: 16,
    textAlign: "center",
  },
  secondaryButtonText: {
    color: colors.primary,
    fontFamily: fonts.primary,
    fontSize: 16,
    textAlign: "center",
  },
});
