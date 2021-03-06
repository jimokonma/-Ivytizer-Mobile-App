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
// UI elements
import { Colors } from "../ui/Colors";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
//

function HomeHeader(props) {
  const cartContext = useContext(CartContext);
  const navigation = useNavigation();
  // Side menu
  const openDrawer = () => {
    navigation.openDrawer();
  };
  // Navigate to cart
  const handleNavigateToCart = () => {
    navigation.navigate("Cart");
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
        <Pressable onPress={handleNavigateToCart}>
          <View style={styles.cartIcon}>
            <View style={cartContext.ids.length > 0 && styles.cartItems}>
              {cartContext.ids.length > 0 && (
                <Text style={{ color: "#fff" }}>{cartContext.ids.length}</Text>
              )}
            </View>
            <FontAwesome name="shopping-cart" size={20} color="black" />
          </View>
        </Pressable>
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
  cartItems: {
    position: "absolute",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    zIndex: 99,
    right: 10,
    top: -5,
    fontWeight: "bold",
    backgroundColor: Colors.PrimaryRed700,
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
