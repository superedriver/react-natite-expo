import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";

import { StudentCourseDescription } from "../../../../entities/course/model/course.model";
import CourseProgress from "../../../../entities/course/ui/CourseProgress/   CourseProgress";
import { Button } from "../../../../shared/Button/Button";
import { Chip } from "../../../../shared/Chip/Chip";
import { Colors, Fonts, Gaps, Radius } from "../../../../shared/tokens";

export default function CourseCard({
  image,
  shortTitle,
  courseOnDirection,
  alias,
  tariffs,
}: StudentCourseDescription) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.header}>
        <CourseProgress totalLessons={120} passedLessons={40} />
        <Text style={styles.title}>{shortTitle}</Text>
        <View style={styles.chips}>
          {courseOnDirection.length > 0 &&
            courseOnDirection.map((courseOnDirection) => (
              <Chip
                key={courseOnDirection.direction.name}
                text={courseOnDirection.direction.name}
              />
            ))}
        </View>
        <MaskedView
          maskElement={
            <Text style={styles.tariff}>
              Tariff &laquo;{tariffs?.[0]?.name || "First Tariff"}&raquo;
            </Text>
          }
        >
          <LinearGradient
            colors={["#D77BE5", "#6C38CC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ ...styles.tariff, ...styles.tariffOpacity }}>
              Tariff &laquo;{tariffs?.[0]?.name || "First Tariff"}&raquo;
            </Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View style={styles.footer}>
        <Button
          text="Buy"
          onPress={() =>
            Linking.openURL(`https://interstingschool.com/course/${alias}`)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.blackLight,
    borderRadius: Radius.r10,
    flexDirection: "column",
  },
  chips: {
    flexDirection: "row",
    gap: Gaps.g10,
  },
  footer: {
    backgroundColor: Colors.violetDark,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  image: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: Radius.r10,
    height: 200,
  },
  tariff: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
    marginTop: 10,
  },
  tariffOpacity: {
    opacity: 0,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f21,
    marginBottom: 12,
  },
});
