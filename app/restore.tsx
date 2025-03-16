import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Restore() {
  return (
    <View>
      <Link href="/">
        <Text>Restore</Text>
      </Link>
    </View>
  );
}
