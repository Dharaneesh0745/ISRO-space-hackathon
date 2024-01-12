import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");

      router.replace("/login");

      Alert.alert("Logout successful");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to logout. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Aquifier Page</Text>

      <Pressable
        onPress={handleLogout}
        style={{
          backgroundColor: "#FF0000",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;
