import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
    },
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
      backgroundColor: 'green',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      minHeight: 300,
      padding: 16,
    },
  });