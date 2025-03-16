import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import CustomLink from "../shared/CustomLink/CustomLink";
import { Colors, Fonts, Gaps } from "../shared/tokens";

export default function UnmatchedCustom() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>OOPS... Something went wrong!</Text>
      <CustomLink href="/" text="To main screen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    gap: Gaps.g50,
    justifyContent: "center",
  },
  image: {
    width: 200,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f18,
    textAlign: "center",
  },
});
