import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export function useScreenOrientation() {
  const [orientation, setOrientation] =
    useState<ScreenOrientation.Orientation>();

  useEffect(() => {
    ScreenOrientation.getOrientationAsync().then((e) => {
      setOrientation(e);
    });
    const subscription = ScreenOrientation.addOrientationChangeListener((e) => {
      setOrientation(e.orientationInfo.orientation);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
}
