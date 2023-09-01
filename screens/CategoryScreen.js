import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/data";

import { useRoute, useNavigation } from '@react-navigation/native';
import MealCard from "../components/MealCard";

const CategoryScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const { categoryId } = route.params;
  const result = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  //useLayoutEffect: (Awake) it runs before painting screen sync
  //useEffect: (Start) it runs after painting screen async


  useLayoutEffect(() => {

  const categoryTitle = CATEGORIES.find((item) => item.id === categoryId).title
  navigation.setOptions({ title: categoryTitle})

  }, [categoryId, navigation])


  return (
    <View style={styles.mealsListContainer}>
      <FlatList
      style={styles.mealsList}
        data={result}
        renderItem={(data) => <MealCard key={data.item.id} meal={data.item} />}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  mealsListContainer: {
    flex: 1,
  },
  mealsList: {
    padding: 16,
  },
  span: {
    width: "100%",
  }
});
