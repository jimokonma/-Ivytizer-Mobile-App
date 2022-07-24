import { useContext, useState } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { CartContext } from "../store/CartContext";
import FoodData from "../data/foodData";
import CartItem from "../components/CartItem";
import PrimaryButton from "../components/ui/PrimaryButton";

function CartScreen(props) {
  const cartContext = useContext(CartContext);

  // Check item available in the cart
  const itemInCart = FoodData.filter((mealItem) => {
    return cartContext.ids.includes(mealItem.id);
  });

  const initialPrice = itemInCart.reduce((prev, val) => {
    return prev + val.price;
  }, 0);
  const [cartTotal, setCartTotal] = useState(initialPrice);

  // get total cost of cart items
  const sumCartItems = (price) => {
    setCartTotal((prevTotal) => prevTotal + price);
  };
  // grand total
  let grandTotal = cartTotal + 500;

  // Display cart items if cart is not empty
  const cartDisplay =
    itemInCart.length !== 0 ? (
      <>
        <FlatList
          data={itemInCart}
          renderItem={(itemData) => {
            return (
              <CartItem data={itemData.item} sumCartItems={sumCartItems} />
            );
          }}
        />
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text>Total ({itemInCart.length} Items)</Text>
            <Text>
              N {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Delivery Fee</Text>
            <Text>N {500}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Discount</Text>
            <Text>0</Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={[styles.summaryRow, { marginBottom: 20 }]}>
            <Text>Grand Total</Text>
            <Text>
              N {grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View>
          <PrimaryButton>Checkout</PrimaryButton>
        </View>
      </>
    ) : (
      <View style={styles.message}>
        <Text>Cart is empty</Text>
      </View>
    );
  return cartDisplay;
}

export default CartScreen;
const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  summary: {
    flex: 1,
    marginHorizontal: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
