import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useAtomValue } from "jotai";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { authAtom } from "../../entities/auth/model/auth.state";
import CustomDrawer from "../../entities/layout/ui/CustomDrawer/CustomDrawer";
import { MenuButton } from "../../features/layout/ui/MenuButton/MenuButton";
import { Colors, Fonts } from "../../shared/tokens";

export default function AppLayout() {
  const { accessToken } = useAtomValue(authAtom);

  if (!accessToken) {
    return <Redirect href="/login" />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawer {...props} />
        )}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowOpacity: 0,
            height: 60,
          },
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerLeftContainerStyle: {
            marginTop: -60,
          },
          headerTitleStyle: {
            color: Colors.white,
            fontFamily: Fonts.regular,
            fontSize: Fonts.f20,
          },
          sceneContainerStyle: { backgroundColor: Colors.black },
          headerTitleAlign: "center",
        })}
      >
        <Drawer.Screen name="index" options={{ title: "My Courses" }} />
        <Drawer.Screen name="profile" options={{ title: "Profile" }} />
        <Drawer.Screen name="club" options={{ title: "Club" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
