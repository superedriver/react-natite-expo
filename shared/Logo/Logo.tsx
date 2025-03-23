import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

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
    height: Platform.select({ ios: 37, android: 47 }),
    width: Platform.select({ ios: 37, android: 47 }),
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
