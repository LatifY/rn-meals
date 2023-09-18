import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MealsList from "../components/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { APP, MANAGEMENTS, MEALS } from "../data/data";
import { useSelector } from "react-redux";

function FavoritesScreen() {

  //context
  const favoritesCtx = useContext(FavoritesContext);

  const [favoriteIds, setFavoriteIds] = useState([]);
  const favoriteIdsRedux = useSelector((state) => state.favorites.ids)

  const data = MEALS.filter((item) => favoriteIds.includes(item.id));

  useEffect(() => {
    if(APP.management == MANAGEMENTS.CONTEXT){
      setFavoriteIds(favoritesCtx.getAllFavorites());
    }
  });

  useEffect(() => {
    if(APP.management == MANAGEMENTS.REDUX){
      setFavoriteIds(favoriteIdsRedux)
    }
  }, [favoriteIdsRedux])
  

  const EmptyFavoritesScreen = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Favorites Yet.</Text>
        <Text style={styles.emptyDescription}>When you find an meal you like, just click star to see it here.</Text>
      </View>
    );
  };

  return (
    <>
      {favoriteIds.length > 0 ? (
        <MealsList data={data} />
      ) : (
        <EmptyFavoritesScreen />
      )}
    </>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    marginVertical: 60
  },

  emptyText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    marginHorizontal: 40,
  },

  emptyDescription: {
    textAlign: "center",
    margin: 30
  }
});
