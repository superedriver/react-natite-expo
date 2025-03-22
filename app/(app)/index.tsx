import { useSetAtom } from "jotai";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { logoutAtom } from "../../entities/auth/model/auth.state";
import { Button } from "../../shared/Button/Button";
import { Colors } from "../../shared/tokens";

export default function MyCourses() {
  const onLogout = useSetAtom(logoutAtom);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My courses</Text>
      <Button text="Logout" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  text: {
    color: Colors.white,
  },
});
