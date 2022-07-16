import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../ui/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: Colors.PrimaryRed700 }}
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
    backgroundColor: Colors.PrimaryRed800,
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
    color: "#fff",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 1,
  },
});
export default PrimaryButton;
