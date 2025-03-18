import { atom } from "jotai";

import { User } from "./user.model";

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}

export const profileAtom = atom<UserState>({
  profile: {
    id: 1,
    name: "Maks",
  },
  isLoading: false,
  error: null,
});
