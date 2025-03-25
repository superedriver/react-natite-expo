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
import CourseCard from "../../widget/course/ui/CourseCard/CourseCard";
import { Colors } from "../../shared/tokens";

export default function MyCourses() {
  const { isLoading, error, courses } = useAtomValue(courseAtom);
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

  return (
    <>
      {isLoading && <ActivityIndicator style={styles.activity} size="large" />}
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
    </>
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
