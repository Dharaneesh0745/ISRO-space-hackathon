import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>index-admin</Text>
      <Pressable
        onPress={() => router.replace("/register")}
        style={{
          width: 200,
          backgroundColor: "#0072b1",
          borderRadius: 6,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
