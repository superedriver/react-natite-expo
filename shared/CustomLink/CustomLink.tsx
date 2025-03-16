import { Link, LinkProps } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { Colors, Fonts } from "../tokens";

export default function CustomLink({
  text,
  href,
  ...props
}: LinkProps & { text: string }) {
  return (
    <Link {...props} href={href} style={styles.link}>
      <Text>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    color: Colors.link,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f18,
  },
});
