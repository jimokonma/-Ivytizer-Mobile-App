import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// Components
import PrimaryButton from "../components/ui/PrimaryButton";
import OutlineIconButton from "../components/ui/OutlineIconButton";
import { Colors } from "../components/ui/Colors";

function LoginScreen({ navigation }) {
  const handleNavigation = (type) => {
    switch (type) {
      case "home":
        return navigation.navigate("MainApp");
      case "signup":
        return navigation.navigate("SignUp");
      case "forgot-password":
        return navigation.navigate("ForgotPassword");
      default:
        return;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Your email" style={styles.textInput} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Your password" style={styles.textInput} />
      <Pressable onPress={() => handleNavigation("forgot-password")}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Pressable>
      <PrimaryButton onPress={() => handleNavigation("home")}>
        Login
      </PrimaryButton>

      <View style={styles.haveAccountContainer}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => handleNavigation("signup")}>
          <Text style={{ color: Colors.PrimaryRed800, fontWeight: "bold" }}>
            {" "}
            Sign Up
          </Text>
        </Pressable>
      </View>
      <View style={styles.socialButtons}>
        <Text>or</Text>
        <OutlineIconButton onPress={() => handleNavigation("home")}>
          <AntDesign name="google" size={24} color="black" />
          <Text>Sign in with Google</Text>
        </OutlineIconButton>
        <OutlineIconButton onPress={() => handleNavigation("home")}>
          <AntDesign name="apple1" size={24} color="black" />
          <Text>Sign in with Apple</Text>
        </OutlineIconButton>
      </View>
    </View>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 23,
  },
  textInput: {
    width: "100%",
    height: 40,
    padding: 10,
    marginBottom: 20,
    color: "#A0A0A0",
    backgroundColor: "#DBDBDB",
    borderRadius: 10,
  },
  label: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: Colors.PrimaryRed800,
    paddingVertical: 15,
  },
  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialButtons: {
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
});
