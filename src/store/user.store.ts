import { create } from "zustand";
import {persist} from 'zustand/middleware'
import { UserInterface } from "../interfaces/user.interface";

interface UserState<T> {
    user: T | null,
    setUser: (data: T) => void,
    logOut: () => void
}

const userStore = create(
  persist<UserState<UserInterface>>(
    (set, get) => ({
      user: null,
      setUser(data: UserInterface) {
        set(state =>  ({...state, user: data}));
      },
      logOut: () => set(state => ({...state, user: null}))
    }),
    {
      name: "USER",
    }
  )
);

export default userStore