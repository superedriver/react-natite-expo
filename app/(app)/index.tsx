import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications/src/Notifications.types";
import { useAtomValue, useSetAtom } from "jotai";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";

import { StudentCourseDescription } from "../../entities/course/model/course.model";
import {
  courseAtom,
  loadCourseAtom,
} from "../../entities/course/model/course.state";
import { Button } from "../../shared/Button/Button";
import { Colors } from "../../shared/tokens";
import CourseCard from "../../widget/course/ui/CourseCard/CourseCard";

export default function MyCourses() {
  const { isLoading, courses } = useAtomValue(courseAtom);
  const loadCourses = useSetAtom(loadCourseAtom);

  useEffect(() => {
    loadCourses();
  }, []);

  const renderItem = ({ item }: { item: StudentCourseDescription }) => {
    return (
      <View style={styles.item}>
        <CourseCard {...item} />
      </View>
    );
  };

  const allowsNotification = async () => {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const requestPermissions = async () => {
    const settings = await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowProvisional: true,
      },
    });
    return (
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const schedualNotifiacation = async () => {
    const granted = await allowsNotification();

    if (!granted) {
      await requestPermissions();
    }

    Notifications.scheduleNotificationAsync({
      content: {
        title: "You have a course!",
        body: "Don't forget to learn!",
        data: { alias: "typescript" },
      },
      trigger: {
        date: new Date(Date.now() + 5 * 1000),
        type: SchedulableTriggerInputTypes.DATE,
      },
    });
  };

  // Function to cancel all scheduled notifications
  const cancelAllNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
  };

  return (
    <View style={styles.wrapper}>
      {isLoading && <ActivityIndicator style={styles.activity} size="large" />}
      <Button text="Remind" onPress={schedualNotifiacation} />
      <Button text="Cancel" onPress={cancelAllNotifications} />

      {courses.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={loadCourses}
              titleColor={Colors.primary}
              tintColor={Colors.primary}
            />
          }
          style={styles.wrapper}
          data={courses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    marginTop: 20,
  },
  item: {
    padding: 20,
  },
  wrapper: {
    backgroundColor: Colors.black,
  },
});
