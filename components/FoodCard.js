import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// Components
import SmallButton from "../components/ui/PrimaryButton";
import { Colors } from "./ui/Colors";
// Context Stores
import { FavContext } from "../store/FavoriteContext";
import { CartContext } from "../store/CartContext";
import Ratings from "./Ratings";

function FoodCard({ data }) {
  // Context Initialization
  const favContext = useContext(FavContext);
  const cartContext = useContext(CartContext);

  // navigate to product details screen
  const navigation = useNavigation();
  const navigateToProductDetails = () => {
    return navigation.navigate("ProductDetails", {
      mealId: data.id,
    });
  };
  // Handle favorite meals
  // Check if the meal is available in the favorites list
  const mealIsInFav = favContext.ids.includes(data.id);
  // Add or Remove items from the favourite list
  const handleFavorites = (id) => {
    if (mealIsInFav) {
      favContext.removeFav(id);
    } else {
      return favContext.addFav(id);
    }
  };
  // Handle Cart Items
  // Check if the meal is available in the cart
  const itemIsInCart = cartContext.ids.includes(data.id);
  // Add or Remove items from the cart
  const handleCartItems = (id) => {
    if (itemIsInCart) {
      cartContext.removeFromCart(id);
    } else {
      cartContext.addToCart(id);
    }
  };
  return (
    <Pressable onPress={navigateToProductDetails}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.image }} style={styles.image} />

          <View style={styles.likesHolder}>
            <Pressable onPress={() => handleFavorites(data.id)}>
              {mealIsInFav ? (
                <FontAwesome
                  name="heart"
                  size={10}
                  color={Colors.PrimaryRed800}
                />
              ) : (
                <FontAwesome name="heart-o" size={10} color={"black"} />
              )}
            </Pressable>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.ingredents}>{data.ingredents}</Text>
          <Ratings rating={data.rating} />
          <Text style={styles.title}>
            N {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
        </View>
        <View style={styles.addToCartContainer}>
          <SmallButton onPress={() => handleCartItems(data.id)}>
            <FontAwesome
              name={itemIsInCart ? "minus" : "plus"}
              size={10}
              color="#fff"
            />
          </SmallButton>
        </View>
      </View>
    </Pressable>
  );
}

export default FoodCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  likesHolder: {
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 25,
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    marginLeft: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  ingredents: {
    color: "#ccc",
  },
  addToCartContainer: {
    width: 35,
    alignSelf: "flex-end",
  },
});
