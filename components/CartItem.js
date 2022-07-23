import { Image, StyleSheet, Text, View } from "react-native";
import Ratings from "../components/Ratings";
import SmallButton from "../components/ui/SmallButton";
import { FontAwesome } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";

function CartItem({ data, sumCartItems }) {
  const [quantity, setQuantity] = useState(1);

  const cartContext = useContext(CartContext);
  useEffect(() => {
    if (quantity < 1) {
      cartContext.removeFromCart(data.id);
    }
  }, [quantity, cartContext.removeFromCart]);

  // Add item quntity
  const addItemQuentity = () => {
    setQuantity((prevQty) => prevQty + 1);
    sumCartItems(+data.price);
  };
  // remove item quntity
  const removeItemQuentity = () => {
    setQuantity((prevQty) => prevQty - 1);
    sumCartItems(-data.price);
  };

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.ingredents}>{data.ingredents}</Text>
        <Ratings rating={data.rating} />
        <View style={styles.priceNBtnHolder}>
          <Text style={styles.title}>
            N {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
          <View style={styles.addQty}>
            <SmallButton onPress={addItemQuentity}>
              <FontAwesome name={"plus"} size={10} color="#fff" />
            </SmallButton>
            <Text>{quantity}</Text>
            <SmallButton onPress={removeItemQuentity}>
              <FontAwesome name={"minus"} size={10} color="#fff" />
            </SmallButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flex: 1,
    height: 80,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  imageContainer: {
    width: 100,
    height: 80,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
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
  priceNBtnHolder: {
    flexDirection: "row",
  },
  addQty: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 100,
  },
});
