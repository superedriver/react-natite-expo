import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Colors, Gaps } from "../tokens";

export function Logo() {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.image}
        source={require("../../assets/logo.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>InterestingSchool</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 37,
    width: 37,
  },
  logo: {
    alignItems: "center",
    flexDirection: "row",
    fontSize: 20,
    gap: Gaps.g10,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
  },
});
