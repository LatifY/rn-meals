import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native";

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(i) => <Text>{i.item.title}</Text>}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
