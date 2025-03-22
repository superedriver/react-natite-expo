import axios, { AxiosError } from "axios";
import { atom } from "jotai";

import { authAtom } from "../../auth/model/auth.state";
import { API } from "../api/api";
import { User } from "./user.model";

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}

export const loadProfileAtom = atom(
  async (get) => get(profileAtom),
  async (get, set) => {
    const { accessToken } = await get(authAtom);

    set(profileAtom, {
      isLoading: true,
      profile: null,
      error: null,
    });

    try {
      const { data } = await axios.get<User>(API.profile, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      set(profileAtom, {
        isLoading: false,
        profile: data,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(profileAtom, {
          isLoading: false,
          profile: null,
          error: error.response?.data?.error,
        });
      }
    }
  },
);

export const profileAtom = atom<UserState>({
  profile: null,
  isLoading: false,
  error: null,
});
