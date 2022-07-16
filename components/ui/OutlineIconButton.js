import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function OutlineIconButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#E5E5E5" }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={styles.buttonInnerContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonInnerContainer: {
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 18,
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 1,
  },
});
export default OutlineIconButton;
