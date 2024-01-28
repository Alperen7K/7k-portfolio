import { create } from "zustand";

export const useStore = create<{ isShow: string; setIsShow: any }>(
 (set: any) => ({
  isShow: "main",
  setIsShow: (section: string) => set({ isShow: section }),
 })
);
