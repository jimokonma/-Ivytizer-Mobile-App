import { createContext, useState } from "react";

export const CartContext = createContext({
  ids: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {},
});

function CartContextProvider({ children }) {
  const [cartItemsIds, setCartItemsIds] = useState([]);
  const addToCart = (id) => {
    return setCartItemsIds((currentItemIds) => [...currentItemIds, id]);
  };

  const removeFromCart = (id) => {
    return setCartItemsIds((currentItemIds) => {
      return currentItemIds.filter((item) => {
        return item !== id;
      });
    });
  };

  const values = {
    ids: cartItemsIds,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
