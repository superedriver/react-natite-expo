import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

import { API } from "../api/api";
import { AuthResponse, LoginRequest } from "./auth.interfaces";

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_STATE: AuthState = {
  accessToken: null,
  isLoading: false,
  error: null,
};

export const authAtom = atomWithStorage<AuthState>(
  "auth",
  {
    accessToken: null,
    isLoading: true,
    error: null,
  },
  storage,
);

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_get, set, { email, password }: LoginRequest) => {
    set(authAtom, {
      isLoading: true,
      accessToken: null,
      error: null,
    });

    try {
      const { data } = await axios.post<AuthResponse>(API.login, {
        email,
        password,
      });

      set(authAtom, {
        isLoading: false,
        accessToken: data.accessToken,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(authAtom, {
          isLoading: false,
          accessToken: null,
          error: error.response?.data?.error,
        });
      }
    }
  },
);

// export const logoutAtom = atomWithStorage<AuthState>(
//   "auth",
//   INITIAL_STATE,
//   storage,
// );

export const logoutAtom = atom(null, (_get, set) => {
  set(authAtom, INITIAL_STATE);
});
