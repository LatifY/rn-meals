import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ContentGroup = ({ label, data }) => {
  const ListDataItem = (item) => {
    return (
      <View key={item.id} style={styles.containerDataItem}>
        <Text style={styles.containerDataItemText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>{label}</Text>
      </View>
      <View style={styles.containerData}>

        {data.map((item) => {
            return ListDataItem(item)
        })}
        {/* <FlatList
          style={{padding: 7}}
          data={data}
          renderItem={ListDataItem}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </View>
  );
};

export default ContentGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: "100%",
  },

  containerHeader: {
    width: "100%",
    flex: 1,
    height: "auto",
    borderBottomWidth: 2,
    opacity: 0.5,
    padding: 5,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },

  containerData: {
    marginVertical: 5,
    width: "100%",
    overflow: "hidden",
  },

  containerDataItem: {
    width: "100%",
    minHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#eaeaea",
    borderRadius: 6,
    padding: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,

    elevation: 3,
  },

  containerDataItemText: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.6
  },
});
