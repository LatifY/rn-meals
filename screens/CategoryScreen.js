import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/data";

import { useRoute, useNavigation } from "@react-navigation/native";
import MealCard from "../components/MealCard";
import MealsList from "../components/MealsList";

const CategoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { categoryId } = route.params;
  const result = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  //useLayoutEffect: (Awake) it runs before painting screen sync
  //useEffect: (Start) it runs after painting screen async

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList data={result} />;
};

export default CategoryScreen;
