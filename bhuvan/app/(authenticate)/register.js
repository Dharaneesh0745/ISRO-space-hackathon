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
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
// import { set } from "mongoose";

const register = () => {
  const [depatrment, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  //const [image, setImage] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const user = {
      department: depatrment,
      name: name,
      email: email,
      password: password,
      role: role,
    };

    axios
      .post("http://10.1.14.1:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert("Registration successful", "Please verify your e-mail");
        setName("");
        setEmail("");
        setPassword("");
        setDepartment("");
        setRole("");
      })
      .catch((error) => {
        //console.log(email);
        Alert.alert("E-mail already exists!", "Please try another one.");
        console.log("E-mail already exists!", error);
      });
  };

  const handleCancel = () => {
    const okay = Alert.alert(
      "Are you sure want to cancel?",
      "Your data will be lost!"
    );
    console.log(okay);
    if (okay) {
      router.replace("/(admin)/dashboard");
    }
  };

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
              marginTop: 0,
              color: "#041E42",
            }}
          >
            Register an account
          </Text>
        </View>

        <View style={{ marginTop: 35 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginBottom: -20,
              color: "#041E42",
            }}
          >
            Enter your department
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
            {/* // <FontAwesome6
            //   name="building-columns"
            //   size={24}
            //   color="black"
            //   style={{ marginLeft: 10, marginRight: 10 }}
            // /> */}

            <Entypo
              name="suitcase"
              size={24}
              color="black"
              style={{ marginLeft: 10, marginRight: 10 }}
            />

            <TextInput
              value={depatrment}
              onChangeText={(text) => setDepartment(text)}
              placeholder="Enter your department"
              style={{
                color: depatrment ? "black" : "gray",
                marginVertical: 10,
                width: 300,
                fontSize: depatrment ? 18 : 15,
              }}
            />

            {/* <Picker
              depatrment={depatrment}
              onValueChange={(itemValue, itemIndex) => setdepatrment(itemValue)}
            >
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
            <Text>Selected Value: {depatrment}</Text> */}
          </View>
        </View>

        <View style={{ marginTop: 21 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginBottom: -20,
              color: "#041E42",
            }}
          >
            Enter your name
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
            <FontAwesome
              name="user"
              size={24}
              color="black"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter your name"
              style={{
                color: name ? "black" : "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 18 : 15,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 21 }}>
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
            Enter your role
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
              name="settings-accessibility"
              size={24}
              color="black"
              style={{ marginLeft: 12, marginRight: 10 }}
            />

            <TextInput
              value={role}
              onChangeText={(text) => setRole(text)}
              placeholder="Enter your role"
              style={{
                color: role ? "black" : "gray",
                marginVertical: 10,
                width: 300,
                fontSize: role ? 18 : 15,
              }}
            />
          </View>
        </View>

        {/* <View
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
        </View> */}

        <View style={{ marginTop: 30 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable
            onPress={handleCancel}
            style={{
              width: 150,
              //backgroundColor: "#0072b1",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Cancel
            </Text>
          </Pressable>
          <Pressable
            onPress={handleRegister}
            style={{
              width: 150,
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

        <View style={{ marginTop: 10 }} />

        {/* `<Pressable
          onPress={() => router.replace("/login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an account?
            <Text style={{ color: "#007FFF" }}> Login</Text>
          </Text>
        </Pressable>` */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
