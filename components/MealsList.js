import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealCard from "./MealCard";

const MealsList = ({ data }) => {
  return (
    <View style={styles.mealsListContainer}>
      <FlatList
        style={styles.mealsList}
        data={data}
        renderItem={(data) => <MealCard key={data.item.id} meal={data.item} />}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  mealsListContainer: {
    flex: 1,
  },
  mealsList: {
    padding: 16,
  },
});
