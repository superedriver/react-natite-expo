import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Fonts } from "../../../../shared/tokens";

export default function CourseProgress({
  totalLessons,
  passedLessons,
}: {
  totalLessons: number;
  passedLessons: number;
}) {
  const progressPercent = Math.round((passedLessons / totalLessons) * 100);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textPercent}>{progressPercent}%</Text>
        <Text style={styles.textCount}>
          {passedLessons}/{totalLessons}
        </Text>
      </View>
      <View style={styles.bar}>
        <View style={{ ...styles.progress, width: `${progressPercent}%` }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.border,
    borderRadius: 20,
    height: 5,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progress: {
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    height: 5,
  },
  textCount: {
    color: Colors.grayLight,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f12,
  },
  textPercent: {
    color: Colors.secondary,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
  wrapper: {
    marginBottom: 18,
  },
});
