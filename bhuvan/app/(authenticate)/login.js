import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
      role: "role",
      department: "department",
      verified: "verified",
    };

    axios.post("http://10.1.14.1:3000/login", user).then((response) => {
      console.log("Full response:", response);
      const token = response.data.token;
      const verified = response.data.verified;
      console.log("Verified:", verified);
      setVerified(verified);
      const role = response.data.role;
      const dept = response.data.department || " ";
      setUserDepartment(dept);
      console.log("Department:", dept);
      setUserRole(role);
      console.log(role);
      AsyncStorage.setItem("authToken", token);

      if (role === "user") {
        if (verified === true) {
          if (dept === "JUMP") {
            router.replace("/(tabs)/aquifier");
          } else if (dept === "HFA") {
            router.replace("/(tabs)/aquifier");
          } else if (dept === "FASAL") {
            router.replace("/(tabs)/aquifier");
          } else if (dept === "Aquifier") {
            router.replace("/(tabs)/aquifier");
          } else if (dept === "MGNREGA") {
            router.replace("/(tabs)/aquifier");
          } else {
            Alert.alert(
              "Invalid Department",
              "You do not have access to this department."
            );
          }
        } else if (verified === false) {
          Alert.alert(
            "Email not verified",
            "Please verify your email to continue. Else, contact the administrator."
          );
        }
      } else if (role === "admin") {
        router.replace("/(admin)/dashboard");
      } else if (role !== "user" && role !== "admin") {
        Alert.alert("Invalid Credentials", "Please enter valid credentials.");
      }
    });
  };

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem("authToken");
  //       if (token) {
  //         const userRole = "user";

  //         if (userRole === "user") {
  //           router.replace("/(tabs)/aquifier");
  //         } else if (userRole === "admin") {
  //           router.replace("/(admin)/dashboard");
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, [userRole]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={require("../../assets/bhuvan.jpeg")}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 20,
              color: "#041E42",
            }}
          >
            Log-in to your account
          </Text>
        </View>

        <View style={{ marginTop: 75 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginBottom: -20,
              color: "#041E42",
            }}
          >
            Enter your e-mail
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your e-mail"
              style={{
                color: email ? "black" : "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 18 : 15,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 1 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: -20,
              color: "#041E42",
            }}
          >
            Enter your password
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <FontAwesome5
              name="lock"
              size={24}
              color="black"
              style={{ marginLeft: 12, marginRight: 10 }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your password"
              style={{
                color: password ? "black" : "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 18 : 15,
              }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep Logged-in</Text>
          <Text style={{ color: "#007FFF", fontWeight: 500 }}>
            Forgot Password?
          </Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable
          onPress={handleLogin}
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
            Login
          </Text>
        </Pressable>

        <View style={{ marginTop: 10 }} />

        <Pressable
          onPress={() => router.replace("/register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account?
            <Text style={{ color: "#007FFF" }}> Sign-up</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
