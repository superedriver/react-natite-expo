import { StyleSheet, Text, View } from "react-native";

import { Colors, Fonts, Radius } from "../tokens";

export function Chip({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.border,
    borderRadius: Radius.r17,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
  },
});
