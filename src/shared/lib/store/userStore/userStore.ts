import { IUser } from "src/entities/User";
import { create } from "zustand";

interface State {
  user?: IUser;
}

interface Actions {
  setUser: (user: IUser | undefined) => void;
}

export const useUserStore = create<State & Actions>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));
