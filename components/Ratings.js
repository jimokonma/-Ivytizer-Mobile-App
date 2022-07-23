import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

function Ratings({ rating }) {
  // Rating logic
  const maxRating = 5;
  const remaingStars = maxRating - rating;
  return (
    <View style={styles.rating}>
      {[...Array(remaingStars)].map((item, index) => (
        <FontAwesome
          name="star"
          size={15}
          key={index}
          style={styles.goldStar}
        />
      ))}
      {[...Array(rating)].map((item, index) => (
        <FontAwesome
          name="star"
          size={15}
          key={index}
          style={styles.grayStar}
        />
      ))}
    </View>
  );
}

export default Ratings;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
  },
  grayStar: {
    color: "#C4C4C4",
    marginRight: 5,
  },
  goldStar: {
    color: "#F4900C",
    marginRight: 5,
  },
});
