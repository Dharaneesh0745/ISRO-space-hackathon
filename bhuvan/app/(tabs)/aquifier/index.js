import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, useRouter } from "expo-router";
import Header from "./components/header";
import Dashboard from "./components/logout";

// const handleClick = () => {
//   <Redirect href="/(authenticate)/login" />;
// };

const index = () => {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "blue" }}>
      {/* <SafeAreaView>
        <View>
          <Header />
        </View>
      </SafeAreaView> */}
    </View>
    // <Redirect href="/(authenticate)/login" />
  );
};

export default index;

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import "react-native-gesture-handler";
// import {
//   SimpleLineIcons,
//   MaterialIcons,
//   MaterialCommunityIcons,
//   FontAwesome,
// } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// //import { NavigationContainer } from "@react-navigation/native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import Home from "./screens/Home";
// import Dummy from "./screens/Dummy";
// import CustomHeader from "./components/cHeader";

// const Drawer = createDrawerNavigator();

// const index = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: "white",
//             width: 240,
//           },
//           headerStyle: {
//             backgroundColor: "blue",
//             //height: 50, // Set the header height to 50
//           },
//           headerTintColor: "white",
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//           drawerActiveTintColor: "blue",
//           drawerLabelStyle: {
//             color: "#111",
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="Home"
//           options={{
//             drawerLabel: "Home",
//             title: "Home",
//             drawerIcon: () => (
//               <SimpleLineIcons name="home" size={20} color="#808080" />
//             ),
//           }}
//           component={Home}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});
