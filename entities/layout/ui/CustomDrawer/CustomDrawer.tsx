import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useSetAtom } from "jotai";
import { useAtom } from "jotai/index";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import ClubIcon from "../../../../assets/icons/menu/club";
import CoursesIcon from "../../../../assets/icons/menu/cources";
import ProfileIcon from "../../../../assets/icons/menu/profile";
import { CloseDrawer } from "../../../../features/layout/ui/CloseDrawer/CloseDrawer";
import CustomLink from "../../../../shared/CustomLink/CustomLink";
import { Logo } from "../../../../shared/Logo/Logo";
import { Colors } from "../../../../shared/tokens";
import { logoutAtom } from "../../../auth/model/auth.state";
import { loadProfileAtom } from "../../../user/model/user.state";
import UserMenu from "../../../user/ui/UserMenu/UserMenu";
import MenuItem from "../MenuItem/MenuItem";

const MENU = [
  {
    text: "Profile",
    icon: <ProfileIcon />,
    path: "profile",
  },
  {
    text: "Courses",
    icon: <CoursesIcon />,
    path: "index",
  },
  {
    text: "Club",
    icon: <ClubIcon />,
    path: "club",
  },
];

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);
  const [profile, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.content}>
        <CloseDrawer {...props.navigation} />
        <UserMenu user={profile.profile?.profile || null} />
        {MENU.map((item) => (
          <MenuItem key={item.text} drawer={props} {...item} />
        ))}
      </View>
      <View style={styles.footer}>
        <CustomLink text="Log Out" href="/login" onPress={() => logout()} />
        <Logo />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    alignItems: "center",
    gap: 50,
    marginBottom: 40,
  },
});
