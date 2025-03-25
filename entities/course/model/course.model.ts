export interface Progress {
  progressPercent: number;
  tariffLessonsCount: number;
  userViewedLessonsCount: number;
}

export interface StudentCourseDescription {
  id: number;
  shortTitle: string;
  image: string;
  title: string;
  alias: string;
  length: number;
  directions: string[];
  author: string;
  plusTag: boolean;
  avgRating: number;
  status: string;
  price: number;
  courseOnDirection: { direction: Record<"name", string> }[];
  tariffs: Tariff[];
  progress: Progress;
}

export interface Tariff {
  id: number;
  name: string;
  price: number;
  type: TariffType;
  oldPrice?: number;
  creditPrice?: number;
  lengthInMonth: number;
  courseId: number;
  createdAt: string;
  videoUuid: string;
}

export enum TariffType {
  free = "free",
  basic = "basic",
  mentor = "mentor",
  project = "project",
}
