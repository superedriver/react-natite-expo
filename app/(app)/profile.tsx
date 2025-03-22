import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Fonts } from "../../shared/tokens";

export default function Profile() {
  return (
    <View>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
