import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
function ForgotPassword({ navigation }) {
  const handleNavigateToVerifyEmail = () => {
    return navigation.navigate("VerifyEmail");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/lock_gery-circle.png")}
        style={styles.image}
      />
      <Text>
        Select which of your contact details your password should be sent to
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Your email" style={styles.textInput} />
      <Text style={styles.label}>Phone</Text>
      <TextInput placeholder="Phone number" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleNavigateToVerifyEmail}>
          Continue
        </PrimaryButton>
      </View>
    </View>
  );
}

export default ForgotPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 23,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "center",
    margin: 15,
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
  buttonContainer: {
    marginTop: 150,
  },
});
