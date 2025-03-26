import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Notification() {
  const router = useRouter();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  useEffect(() => {
    const subscriptionReceived = Notifications.addNotificationReceivedListener(
      (notefication) => {
        console.log(
          "Notification received: ",
          notefication.request.content.data,
        );
      },
    );

    const subResponseReceived =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("notification response received: ", response);
        const alias = response.notification.request.content.data.alias;
        router.push(`(app)/course/${alias}`);
      });

    return () => {
      subscriptionReceived.remove();
      subResponseReceived.remove();
    };
  }, []);

  return null;
}
