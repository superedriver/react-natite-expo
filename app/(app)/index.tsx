import { useSetAtom } from "jotai";
import React from "react";
import { Text, View } from "react-native";

import { logoutAtom } from "../../entities/auth/model/auth.state";
import { Button } from "../../shared/Button/Button";
import { Colors } from "../../shared/tokens";

export default function MyCourses() {
  const onLogout = useSetAtom(logoutAtom);
  return (
    <View>
      <Text
        style={{
          color: Colors.white,
        }}
      >
        My courses
      </Text>
      <Button text="Logout" onPress={onLogout} />
    </View>
  );
}
