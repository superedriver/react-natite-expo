import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Fonts } from "../../shared/tokens";

export default function Club() {
  return (
    <View>
      <Text style={styles.text}>Club</Text>
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
