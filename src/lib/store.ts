import { create } from "zustand";
import type { UserInfo } from "firebase/auth";

export interface StoreState {
  rank: number;
  percentile: number;
  score: number;
  user: UserInfo | null;
}

export interface StoreActions {
  updateState(newState: Partial<StoreState>): void;
  updateUser(userData: UserInfo | null): void;
}

interface IStore {
  state: StoreState;
  actions: StoreActions;
}

export const initialState = {
  rank: 1,
  percentile: 30,
  score: 10,
  user: null,
} satisfies StoreState;

export const useStore = create<IStore>((set) => ({
  state: initialState,
  actions: {
    updateState(newState) {
      set(({ state }) => ({ state: { ...state, ...newState } }));
    },
    updateUser(userData) {
      set(({ state }) => ({
        state: { ...state, user: userData },
      }));
    },
  },
}));

export const useStoreState = () => useStore(({ state }) => state);
export const useStoreActions = () => useStore(({ actions }) => actions);
