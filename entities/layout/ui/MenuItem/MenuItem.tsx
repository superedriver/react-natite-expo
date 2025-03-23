import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React, { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, Fonts, Gaps } from "../../../../shared/tokens";

interface MenuItemProps {
  drawer: DrawerContentComponentProps;
  icon: ReactNode;
  text: string;
  path: string;
}

export default function MenuItem({
  text,
  icon,
  path,
  drawer,
  ...props
}: MenuItemProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const isActive = drawer.state.routes[drawer.state.index].name === path;

  return (
    <Pressable
      {...props}
      onPress={() => drawer.navigation.navigate(path)}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
    >
      <View
        style={{
          ...styles.container,
          borderColor: isActive ? Colors.primary : Colors.black,
          backgroundColor:
            clicked || isActive ? Colors.violetDark : Colors.black,
        }}
      >
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRightWidth: 5,
    flexDirection: "row",
    gap: Gaps.g20,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
