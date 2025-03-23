import { router } from "expo-router";
import { Orientation } from "expo-screen-orientation";
import { useAtom } from "jotai/index";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";

import { loginAtom } from "../entities/auth/model/auth.state";
import { Button } from "../shared/Button/Button";
import CustomLink from "../shared/CustomLink/CustomLink";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { useScreenOrientation } from "../shared/hooks/useScreenOrientation";
import { Input } from "../shared/Input/Input";
import { Logo } from "../shared/Logo/Logo";
import { Colors, Gaps } from "../shared/tokens";

export default function Login() {
  const [loginError, setLoginError] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);

  const orientation = useScreenOrientation();

  useEffect(() => {
    setTimeout(() => setLoginError(undefined), 4000);
  });

  useEffect(() => {
    if (accessToken) {
      router.replace("/");
    }
  }, [accessToken]);

  const onSubmit = async () => {
    if (!email) {
      setLoginError("Email is required!");
      return;
    }

    if (!password) {
      setLoginError("Password is required!");
      return;
    }

    if (email && password) {
      login({ email, password });
    }
  };

  useEffect(() => {
    setTimeout(() => setLoginError(undefined), 4000);
  }, [accessToken]);

  useEffect(() => {
    if (error) {
      setLoginError(error);
    }
  }, [error]);

  const inputWidth =
    orientation === Orientation.PORTRAIT_UP
      ? "auto"
      : Dimensions.get("screen").width / 2 - 16 - 48;

  return (
    <View style={styles.container}>
      <ErrorNotification error={loginError} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Logo />
        <View style={styles.form}>
          <View
            style={{
              ...styles.inputs,
              flexDirection:
                orientation === Orientation.PORTRAIT_UP ? "column" : "row",
            }}
          >
            <Input
              style={{
                width: inputWidth,
              }}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Input
              style={{
                width: inputWidth,
              }}
              placeholder="Password"
              isPassword
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <Button text="Enter" onPress={onSubmit} isLoading={isLoading} />
        </View>

        <CustomLink href="/course/typescript" text="Recover Password" />
      </KeyboardAvoidingView>
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
  inputs: {
    gap: Gaps.g16,
  },
});
