// CustomHeader.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CustomHeader;
