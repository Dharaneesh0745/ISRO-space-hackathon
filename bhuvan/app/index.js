import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, useRouter } from "expo-router";

// const handleClick = () => {
//   <Redirect href="/(authenticate)/login" />;
// };

const index = () => {
  const router = useRouter();

  return (
    <View>
      <Text>index</Text>
      <Button title="Get Started" onPress={() => router.replace("/login")} />
    </View>
    // <Redirect href="/(authenticate)/login" />
  );
};

export default index;

const styles = StyleSheet.create({});
