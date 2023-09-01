import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  

const InfoGroup = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.infoTextGroup}>
      <View style={styles.infoTextContainer}>
        <Ionicons
          style={{ opacity: 0.4 }}
          name="time-outline"
          size={15}
          color="black"
        />
        <Text style={styles.infoText}>{duration} min</Text>
      </View>
      <Text style={styles.infoText}>{capitalize(complexity)}</Text>
      <Text style={styles.infoText}>{capitalize(affordability)}</Text>
    </View>
  );
};

export default InfoGroup;

const styles = StyleSheet.create({
  infoTextGroup: {
    flexDirection: "row",
    marginTop: 5,
  },

  infoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: -3,
  },

  infoText: {
    fontSize: 16,
    marginHorizontal: 5,
    opacity: 0.4,
    fontWeight: "300",
  },
});
