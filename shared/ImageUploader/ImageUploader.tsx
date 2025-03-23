import axios, { AxiosError } from "axios";
import {
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { PermissionStatus } from "expo-modules-core/src/PermissionsInterface";
import FormData from "form-data";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

import UploadIcon from "../../assets/icons/upload";
import { API } from "../../entities/file/ui/api";
import { Colors, Fonts, Gaps, Radius } from "../tokens";
import { UploadResponse } from "./imageUploader.interfase";

const useLibrary = ({ onUpload, onError }: ImageUploaderProps) => {
  const [permissions, requestPermissions] = useMediaLibraryPermissions();

  const upload = async () => {
    const isGranted = await verifyPermissions();
    if (!isGranted) {
      onError("Permission denied");
      return;
    }

    const asset = await pickImage();
    if (!asset) {
      onError("Choose the image");
      return;
    }

    const uploadedUrl = await uploadToServer(
      asset.uri,
      asset.fileName ?? "image.jpg",
    );
    if (!uploadedUrl) {
      onError("Error while uploading the image");
      return;
    }

    onUpload(uploadedUrl);
  };

  const verifyPermissions = async () => {
    if (permissions?.status === PermissionStatus.UNDETERMINED) {
      const result = await requestPermissions();
      return result.granted;
    }

    if (permissions?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission required",
        "Please enable library permissions in your settings to continue",
      );
      return false;
    }

    return true;
  };

  const uploadToServer = async (uri: string, name: string) => {
    const formData = new FormData();
    formData.append("files", {
      uri,
      name,
      type: "image/jpeg",
    });

    try {
      const { data } = await axios.post<UploadResponse>(
        API.uploadImage,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return data.urls.original;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      }
      throw error;
    }
  };

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.canceled || !result.assets.length) {
      return null;
    }

    return result.assets[0];
  };

  return { upload };
};

interface ImageUploaderProps {
  onUpload: (uri: string) => void;
  onError: (error: string) => void;
}

export default function ImageUploader({
  onUpload,
  onError,
}: ImageUploaderProps) {
  const { upload } = useLibrary({ onUpload, onError });

  return (
    <Pressable onPress={upload}>
      <View style={styles.container}>
        <UploadIcon />
        <Text style={styles.text}>Upload image</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.violetDark,
    borderRadius: Radius.r10,
    flexDirection: "row",
    gap: Gaps.g8,
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
  },
});
