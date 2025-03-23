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

export const updateProfileAtom = atom(
  async (get) => get(profileAtom),
  async (get, set, update: Partial<User>) => {
    const { accessToken } = await get(authAtom);

    set(profileAtom, {
      ...get(profileAtom),
      isLoading: true,
      error: null,
    });

    try {
      const { data } = await axios.patch<User>(API.profile, update, {
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
      const { data } = await axios.get<{
        profile: User;
      }>(API.profile, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // console.log("loadProfileAtom data: ", data);

      set(profileAtom, {
        isLoading: false,
        profile: data.profile,
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
