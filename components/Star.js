import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Color from "../data/colors";
const Star = ({ activeOnStart, onPress }) => {
  const [isPressed, setIsPressed] = useState(activeOnStart);

  const pressHandler = () => {
    setIsPressed(!isPressed);
    onPress()
  };

  return (
    <View style={styles.base}>
      <TouchableOpacity
        style={styles.container}
        hitSlop={20}
        onPress={pressHandler}
      >
        <FontAwesome
          name={isPressed ? "star" : "star-o"}
          size={24}
          color={Color.Star}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  base: {
    width: 32,
    height: 32
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
