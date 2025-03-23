import { useAtom } from "jotai/index";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { updateProfileAtom } from "../../entities/user/model/user.state";
import Avatar from "../../entities/user/ui/Avatar/Avatar";
import { Button } from "../../shared/Button/Button";
import ImageUploader from "../../shared/ImageUploader/ImageUploader";
import { Colors, Gaps } from "../../shared/tokens";

// const useCamera = (setImage: Dispatch<SetStateAction<string | null>>) => {
//   const [permissions, requestPermissions] = useCameraPermissions();
//   const verifyPermissions = async () => {
//     if (permissions?.status === PermissionStatus.UNDETERMINED) {
//       const result = await requestPermissions();
//       return result.granted;
//     }
//
//     if (permissions?.status === PermissionStatus.DENIED) {
//       Alert.alert(
//         "Permission required",
//         "Please enable camera permissions in your settings to continue",
//       );
//       return false;
//     }
//
//     return true;
//   };
//
//   const takePhoto = async () => {
//     if (!(await verifyPermissions())) return;
//
//     const result = await launchCameraAsync({
//       mediaTypes: ["images"],
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });
//
//     if (result.canceled || !result.assets.length) {
//       return;
//     }
//     setImage(result.assets[0].uri);
//   };
//
//   return { takePhoto };
// };

export default function Profile() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [profile, updateProfile] = useAtom(updateProfileAtom);

  const onSave = async () => {
    if (!imageUri) {
      return;
    }

    await updateProfile({ photo: imageUri });
  };

  useEffect(() => {
    if (profile?.profile?.photo) {
      setImageUri(profile?.profile?.photo);
    }
  }, [profile]);

  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Avatar imageUri={imageUri} />
        <ImageUploader onUpload={setImageUri} onError={(e) => console.log(e)} />
      </View>
      <Button
        text="Save Profile"
        onPress={onSave}
        isLoading={profile.isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  images: {
    alignItems: "center",
    flexDirection: "row",
    gap: Gaps.g20,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
