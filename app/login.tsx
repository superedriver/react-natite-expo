import { router } from "expo-router";
import { useAtom } from "jotai/index";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { loginAtom } from "../entities/auth/model/auth.state";
import { Button } from "../shared/Button/Button";
import CustomLink from "../shared/CustomLink/CustomLink";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { Input } from "../shared/Input/Input";
import { Logo } from "../shared/Logo/Logo";
import { Colors, Gaps } from "../shared/tokens";

export default function Login() {
  const [loginError, setLoginError] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);

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

  return (
    <View style={styles.container}>
      <ErrorNotification error={loginError} />
      <View style={styles.content}>
        <Logo />
        <View style={styles.form}>
          <Input
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Input
            placeholder="Password"
            isPassword
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Button text="Enter" onPress={onSubmit} isLoading={isLoading} />
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
