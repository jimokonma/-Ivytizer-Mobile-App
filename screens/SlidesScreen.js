// Components
import { Text, View, StyleSheet, Pressable } from "react-native";
import Swiper from "react-native-swiper";
// components
import Slide1 from "../components/slides/Slide1";
import Slide2 from "../components/slides/Slide2";
// UI elements
import { Colors } from "../components/ui/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function SlidesScreen({ navigation }) {
  const handleNavigation = (type) => {
    type === "login"
      ? navigation.navigate("Login")
      : navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Swiper activeDotColor={Colors.PrimaryRed800} loop={false}>
        <Slide1 />
        <Slide2 />
      </Swiper>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          color={Colors.PrimaryRed800}
          onPress={() => handleNavigation("login")}
        >
          Login
        </PrimaryButton>
        <Pressable onPress={() => handleNavigation("signup")}>
          <Text style={{ color: Colors.PrimaryRed800, marginTop: 10 }}>
            Don't have an account?
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SlidesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 25,
    paddingHorizontal: 30,
    alignItems: "center",
  },
});
