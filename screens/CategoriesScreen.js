import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";


const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(i) => <CategoryCard title={i.item.title}/>}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
});
