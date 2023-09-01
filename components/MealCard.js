import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Meal from "../models/meal";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import InfoGroup from "./InfoGroup";

const MealCard = ({ meal }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("MealScreen", {mealId: meal.id})} style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
      <View style={styles.mealContainer}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.img} />
        </View>
        <View style={styles.innerTextGroup}>
          <Text style={styles.titleText}>{meal.title}</Text>
          
          <InfoGroup duration={meal.duration} affordability={meal.affordability} complexity={meal.complexity}/>

          <FontAwesome
            style={styles.icon}
            name="arrow-circle-right"
            size={24}
            color="black"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.8,
  },

  icon: {
    position: "absolute",
    right: 12,
    bottom: 12,
    opacity: 0.5,
  },

  mealContainer: {
    flex: 1,
    width: "100%",
    height: 255,
    borderRadius: 10,
    backgroundColor: "#f3f3f3",
    marginVertical: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 6,
  },

  imgContainer: {
    width: "100%",
    flex: 4,
  },

  img: {
    flex: 1,
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  innerTextGroup: {
    flex: 1,
    padding: 12,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "700",
  }
});
