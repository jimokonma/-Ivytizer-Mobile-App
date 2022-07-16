import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// Components
import SmallButton from "../components/ui/PrimaryButton";
import { Colors } from "./ui/Colors";

function FoodCard({ data, navigation, handleLike }) {
  const maxRating = 5;
  const remaingStars = maxRating - data.rating;
  return (
    <Pressable>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.image }} style={styles.image} />

          <View style={styles.likesHolder}>
            <Pressable onPress={() => handleLike(data.id)}>
              {data.like ? (
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
            {[...Array(data.rating)].map((item, index) => (
              <FontAwesome
                name="star"
                size={15}
                color="black"
                key={index}
                style={styles.grayStar}
              />
            ))}
          </View>
          <Text style={styles.title}>
            N {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
        </View>
        <View style={styles.addToCartContainer}>
          <SmallButton>
            <FontAwesome name="plus" size={10} color="#fff" />
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
  rating: {
    flexDirection: "row",
  },
  grayStar: {
    color: "#C4C4C4",
  },
  goldStar: {
    color: "#F4900C",
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
