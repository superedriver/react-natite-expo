import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/module/src/types";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import CloseIcon from "../../../../assets/icons/close";

export function CloseDrawer(props: DrawerNavigationHelpers) {
  return (
    <Pressable onPress={() => props.closeDrawer()}>
      <View style={styles.button}>
        <CloseIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: 0,
  },
});
