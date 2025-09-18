import { create } from "zustand";
import type { SettingsType } from "../model/settings";

interface SettingsState {
  settings: SettingsType | null;
  setSettings: (payload: SettingsType | null) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: null,
  setSettings: (payload) => set({ settings: payload }),
}));
