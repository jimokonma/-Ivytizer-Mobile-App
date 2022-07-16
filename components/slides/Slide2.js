import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
// Components
import { Colors } from "../ui/Colors";

const deviceWidth = Dimensions.get("window").width;
function Slide1() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/deliveryman.png")}
        style={styles.image}
      />

      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          Have your food delivered to your doorstep within the shortest time
          possible.
        </Text>
      </View>
    </View>
  );
}

export default Slide1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginHorizontal: 36,
    fontSize: 16,
    color: Colors.primaryBlue800,
    marginBottom: 220,
  },
  image: {
    width: deviceWidth,
    height: 367,
    marginBottom: 35,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
});
