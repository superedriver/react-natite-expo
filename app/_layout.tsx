import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Colors } from "../shared/tokens";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loaded, error] = useFonts({
    "FiraSans-Regular": require("../assets/fonts/FiraSans-Regular.ttf"),
    "FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  // Return
  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          statusBarBackgroundColor: Colors.black,
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: insets.top,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen
          name="restore"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
