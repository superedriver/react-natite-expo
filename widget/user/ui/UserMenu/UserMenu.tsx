import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { User } from "../../../../entities/user/model/user.model";
import Avatar from "../../../../entities/user/ui/Avatar/Avatar";
import { Colors, Fonts, Gaps } from "../../../../shared/tokens";

export default function UserMenu({ user }: { user: User | null }) {
  if (!user) return;

  return (
    <View style={styles.container}>
      <Avatar imageUri={user.photo} />
      <Text style={styles.text}>{`${user.name} ${user.surname || ""}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: Gaps.g8,
    marginBottom: 40,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
