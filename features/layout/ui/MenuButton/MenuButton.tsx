import React, { useState } from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";

import MenuIcon from "../../../../assets/icons/menu";
import { Colors } from "../../../../shared/tokens";

export function MenuButton({
  navigation,
  ...props
  // @ts-expect-error any type
}: PressableProps & { navigation: NavigationProp }) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => navigation.openDrawer()}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: isPressed ? Colors.violetDark : Colors.blackLight,
        }}
      >
        <MenuIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
