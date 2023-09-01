import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

const CategoryCard = ({ title, color, onPress }) => {
  const width = Dimensions.get("window").width;
  const margin = 9;
  const column = 2;

  const availableSpace = width - margin * column * 2;
  const styles = StyleSheet.create({
    gridCard: {
      width: availableSpace / column,
      height: 90,
      backgroundColor: color,
      borderRadius: 8,
      margin: margin,
      padding: 12,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4.65,

      elevation: 6,
    },

    button: { flex: 1 },

    pressedButton: {
      opacity: 0.7,
    },

    cardText: {
      textAlign: "left",
      fontSize: 24,
      fontWeight: "900",
      textShadowColor: "rgba(0, 0, 0, 0.08)",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 10,
      color: "white"
    },

    icon: {
      position: "absolute",
      right: 10,
      bottom: 10,
      opacity: 0.6
    }
  });

  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [

          styles.button,
          pressed ? styles.pressedButton : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.gridCard}>
          <View>
            <Text style={[styles.cardText]}>{title}</Text>
          </View>

          <Ionicons style={styles.icon} name="arrow-forward-circle-outline" size={32} color="#ffffff" />
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;
