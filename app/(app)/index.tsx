import React from "react";
import { Text, View } from "react-native";

import { Colors } from "../../shared/tokens";

export default function MyCourses() {
  return (
    <View>
      <Text
        style={{
          color: Colors.white,
        }}
      >
        My Courses
      </Text>
    </View>
  );
}
