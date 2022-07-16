import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../ui/Colors";

function HomeHeader(props) {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Pressable onPress={openDrawer}>
          <Image
            source={require("../../assets/profileImage.jpg")}
            style={styles.profileImage}
          />
        </Pressable>

        <FontAwesome
          name="shopping-cart"
          size={20}
          color="black"
          style={styles.cartIcon}
        />
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color={Colors.PrimaryRed800} />
        <TextInput
          placeholder="Search for your meal"
          style={styles.textInput}
        />
      </View>
      <View style={styles.navigationContainer}>
        <Text
          style={[
            styles.navigationText,
            { borderBottomWidth: 3, borderBottomColor: "#fff" },
          ]}
        >
          Regular
        </Text>
        <Text style={styles.navigationText}>Favorite</Text>
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    paddingTop: 10,
    overflow: "hidden",
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  cartIcon: {
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
  },
  navigationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navigationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 4,
  },
});
