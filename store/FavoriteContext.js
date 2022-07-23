import { createContext, useState } from "react";

export const FavContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

function FavContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFav = (id) => {
    setFavoriteMeals((currentFavMeals) => [...currentFavMeals, id]);
  };

  const removeFav = (id) => {
    return setFavoriteMeals((currentFavMeals) => {
      return currentFavMeals.filter((items) => items !== id);
    });
  };
  const values = {
    ids: favoriteMeals,
    addFav,
    removeFav,
  };
  return <FavContext.Provider value={values}>{children}</FavContext.Provider>;
}

export default FavContextProvider;
