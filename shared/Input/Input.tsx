import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import EyeClosedIcon from "../../assets/icons/eye-closed";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import { Colors, Fonts, Radius } from "../tokens";

export function Input({
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible((prev) => !prev)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  input: {
    backgroundColor: Colors.violetDark,
    borderRadius: Radius.r10,
    color: Colors.gray,
    fontFamily: Fonts.regular,
    height: 58,
    paddingHorizontal: 24,
  },
});
