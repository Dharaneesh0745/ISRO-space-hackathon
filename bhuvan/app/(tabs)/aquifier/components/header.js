import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  const handleSidebar = () => {
    Alert.alert("Opening Sidebar");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header}>
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            size={24}
            color="white"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for data"
            placeholderTextColor="white"
            style={styles.searchInput}
          />
        </View>
        <FontAwesome5
          name="location-arrow"
          size={24}
          color="white"
          style={styles.locationIcon}
        />
        <Ionicons
          name="notifications"
          size={24}
          color="white"
          style={styles.notificationIcon}
        />
        <Pressable onPress={handleSidebar}>
          <FontAwesome
            name="user-circle-o"
            size={24}
            color="white"
            style={styles.avatarIcon}
          />
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "sticky",
    width: "100%",
    height: 65,
    backgroundColor: "#007FFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
  },
  searchInput: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft: 8,
  },
  locationIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
  },
  notificationIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 25,
  },
  avatarIcon: {
    width: 25,
    height: 25,
  },
});
