import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import UserIcon from "../../../../assets/icons/user";
import { Colors, Fonts, Gaps } from "../../../../shared/tokens";
import { User } from "../../model/user.model";

export default function UserMenu({ user }: { user: User | null }) {
  if (!user) return;

  return (
    <View style={styles.container}>
      {user.photo ? (
        <Image
          style={styles.image}
          source={{
            uri: user.photo,
          }}
        />
      ) : (
        <UserIcon />
      )}

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
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
