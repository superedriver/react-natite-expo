import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "../shared/Button/Button";
import CustomLink from "../shared/CustomLink/CustomLink";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { Input } from "../shared/Input/Input";
import { Logo } from "../shared/Logo/Logo";
import { Colors, Gaps } from "../shared/tokens";

export default function Login() {
  const [loginError, setLoginError] = useState<string | undefined>();

  useEffect(() => {
    setTimeout(() => setLoginError(undefined), 4000);
  });

  return (
    <View style={styles.container}>
      <ErrorNotification error={loginError} />
      <View style={styles.content}>
        <Logo />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Password" isPassword />
          <Button
            text="Enter"
            onPress={() => setLoginError("Incorrect login or password")}
          />
        </View>
        <CustomLink href="/course/typescript" text="Recover Password" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: "center",
    padding: 55,
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  form: {
    alignSelf: "stretch",
    gap: Gaps.g16,
  },
});
