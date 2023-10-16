import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUser = create(
  persist(
    (set, get) => ({
      user: {},
      login: (info) => {
        set((state) => ({
          ...state,
          user: info,
        }));
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUser;
