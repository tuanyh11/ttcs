import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set, get) => ({
      user: null,
      login:  (user) => {
        console.log(user);
          set((state) => ({ ...state, user }));
      },
      logout: () => {
        set((state) => ({ ...state, user: null }));
      },
    }),
    {
      name: "USER",
    }
  )
);

export default useAuth;
