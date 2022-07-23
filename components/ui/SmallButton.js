import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../ui/Colors";

function SmallButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: Colors.PrimaryRed800 }}
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
    width: 25,
    height: 25,
    backgroundColor: Colors.PrimaryRed800,
    borderRadius: 3,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonInnerContainer: {
    flex: 1,
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
export default SmallButton;
