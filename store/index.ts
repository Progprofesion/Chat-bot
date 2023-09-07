import { create } from "zustand";

interface UseStore {
  messages: string[];
  time: string;
  isBotMessage: boolean;
  addMessage: (message: string) => void;
  changeIsbot: (boolean: boolean) => void;
  setTime: (time: string) => void;
}

const useStore = create<UseStore>((set) => ({
  messages: [],
  time: "",
  isBotMessage: false,
  addMessage: (message: string) =>
    set((state) => ({
      messages: [message, ...state.messages],
    })),
  changeIsbot: (boolean: boolean) =>
    set((state) => ({
      isBotMessage: (state.isBotMessage = boolean),
    })),
  setTime: (time: string) =>
    set((state) => ({
      time: (state.time = time),
    })),
}));
export default useStore;
