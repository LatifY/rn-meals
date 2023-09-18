import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  getAllFavorites: () => {},
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  resetFavorites: () => {}
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const getAllFavorites = () => {
    return favoriteIds
  }

  const addFavorite = (id) => {
    console.log("add favorite: " + id.toString())
    setFavoriteIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
  };

  const removeFavorite = (id) => {
    console.log("remove favorite: " + id.toString())
    setFavoriteIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((item) => item !== id)
    );
  };

  const resetFavorites = () => {
    console.log("reset favorites")
    setFavoriteIds([])
  }

  const value = {
    ids: favoriteIds,
    getAllFavorites: getAllFavorites,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    resetFavorites: resetFavorites
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider
