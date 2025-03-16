import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { Colors } from "../../shared/tokens";

export default function CoursePage() {
  const { alias } = useLocalSearchParams();

  return (
    <View>
      <Text
        style={{
          color: Colors.white,
        }}
      >
        Course Page {alias}
      </Text>
    </View>
  );
}
