import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Avatar({
  imageUri,
}: {
  imageUri: string | null | undefined;
}) {
  return (
    <>
      {imageUri ? (
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
      ) : (
        <Image
          style={styles.image}
          source={require("../../../../assets/avatar.png")}
          resizeMode="contain"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
});
