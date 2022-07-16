import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Colors } from "../components/ui/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function SignUpScreen({ navigation }) {
  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="Your name" style={styles.textInput} />
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Your email" style={styles.textInput} />
      <Text style={styles.label}>Address</Text>
      <TextInput placeholder="Your address" style={styles.textInput} />
      <Text style={styles.label}>Phone number</Text>
      <TextInput placeholder="Your phone number" style={styles.textInput} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Your password" style={styles.textInput} />
      <PrimaryButton>Done</PrimaryButton>
      <Text style={styles.termsAndConditions}>
        By signing up, you agree to our{" "}
        <Text style={styles.termsAndConditionsInnerText}>
          Terms & Conditions
        </Text>
      </Text>
      <View style={styles.haveAccountContainer}>
        <Text>Already have an account? </Text>
        <Pressable onPress={handleNavigateToLogin}>
          <Text style={{ color: Colors.PrimaryRed800, fontWeight: "bold" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
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
  termsAndConditions: {
    marginTop: 20,
  },
  termsAndConditionsInnerText: {
    fontWeight: "bold",
  },
  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
