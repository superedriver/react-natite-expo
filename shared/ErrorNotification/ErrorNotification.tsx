import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";

import { Colors, Fonts } from "../tokens";

export function ErrorNotification({
  error,
}: PressableProps & { error: string | undefined }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!error) return;

    setIsShown(true);

    const timoutId = setTimeout(() => {
      setIsShown(false);
    }, 3000);

    return () => {
      clearTimeout(timoutId);
    };
  }, [error]);

  const animatedValue = new Animated.Value(-100);
  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  if (!isShown) return null;

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [
          {
            translateY: animatedValue,
          },
        ],
      }}
      onLayout={onEnter}
    >
      <Text style={styles.text}>{error}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.red,
    justifyContent: "center",
    padding: 15,
    position: "absolute",
    top: 20,
    width: Dimensions.get("screen").width,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
    textAlign: "center",
  },
});
