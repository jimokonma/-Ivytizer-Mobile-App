import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";

// context
import { FavContext } from "../store/FavoriteContext";

// components
import { Colors } from "../components/ui/Colors";
import FoodData from "../data/foodData";
import PrimaryButton from "../components/ui/PrimaryButton";
import { CartContext } from "../store/CartContext";

function ProductDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const displayMeal = FoodData.find((meal) => meal.id === mealId);

  // Rating logic
  const maxRating = 5;
  const remaingStars = maxRating - displayMeal.rating;

  // Use Context
  const favContext = useContext(FavContext);
  const cartContext = useContext(CartContext);
  // Check if the meal is available in the favorites list
  const mealIsInFav = favContext.ids.includes(displayMeal.id);

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
  const itemIsInCart = cartContext.ids.includes(displayMeal.id);
  // Add or Remove items from the cart
  const handleCartItems = (id) => {
    if (itemIsInCart) {
      cartContext.removeFromCart(id);
    } else {
      cartContext.addToCart(id);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <FontAwesome
            name="arrow-left"
            size={10}
            color="black"
            style={styles.backButton}
          />
        </Pressable>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <View style={styles.likesHolder}>
            <Pressable onPress={() => handleFavorites(displayMeal.id)}>
              {mealIsInFav ? (
                <FontAwesome
                  name="heart"
                  size={10}
                  displayMeal
                  color={Colors.PrimaryRed800}
                />
              ) : (
                <FontAwesome name="heart-o" size={10} color={"black"} />
              )}
            </Pressable>
          </View>
          <Image source={{ uri: displayMeal.image }} style={styles.image} />
        </View>
        <View style={styles.mealDetails}>
          <View>
            <Text style={styles.title}>{displayMeal.title}</Text>
            <View style={styles.rating}>
              {[...Array(remaingStars)].map((item, index) => (
                <FontAwesome
                  name="star"
                  size={15}
                  color="black"
                  key={index}
                  style={styles.goldStar}
                />
              ))}
              {[...Array(displayMeal.rating)].map((item, index) => (
                <FontAwesome
                  name="star"
                  size={15}
                  color="black"
                  key={index}
                  style={styles.grayStar}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.price}>
              N
              {displayMeal.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View>
        </View>
        <View style={styles.des}>
          <Text style={styles.desTitle}>Description</Text>
          <Text style={styles.desBody}>{displayMeal.description}</Text>
        </View>
      </View>
      <View style={styles.addToCartContainer}>
        <PrimaryButton onPress={() => handleCartItems(displayMeal.id)}>
          {itemIsInCart ? "Remove From Cart" : "Add To Cart"}
        </PrimaryButton>
      </View>
    </View>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 215,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    backgroundColor: Colors.PrimaryRed800,
  },
  backButton: {
    width: 30,
    height: 30,
    padding: 10,
    marginLeft: 40,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  imageContainer: {
    width: 311,
    height: 200,
    overflow: "hidden",
    borderRadius: 15,
    position: "absolute",
    top: -150,
    left: 40,
  },
  likesHolder: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 25,
    zIndex: 99,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mealDetails: {
    marginHorizontal: 28,
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    marginVertical: 10,
  },
  grayStar: {
    color: "#C4C4C4",
    marginHorizontal: 3,
  },
  goldStar: {
    color: "#F4900C",
    marginHorizontal: 3,
  },
  des: {
    marginHorizontal: 28,
  },
  desTitle: {
    marginVertical: 5,
  },
  desBody: {
    textAlign: "justify",
  },
  addToCartContainer: {
    marginTop: 80,
  },
});
