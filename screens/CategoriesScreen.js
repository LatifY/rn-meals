import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/data";
import CategoryCard from "../components/CategoryCard";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const column = 2;
const margin = 10;
const SIZE = (width - margin * column * 2) / column;

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const renderCategoryCard = (data) => {
    return (
      <CategoryCard
        title={data.item.title}
        color={data.item.color}
        onPress={() =>
          navigation.navigate("CategoryScreen", { categoryId: data.item.id })
        }
      />
    );
  };

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryCard}
        numColumns={2}
      />
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});
