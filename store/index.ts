import { create } from "zustand";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

interface Message {
  id: number;
  message: string;
  time: string;
}

interface UseStore {
  messages: Message[];
  isBotMessage: boolean;
  addMessage: (messageData: { message: string; time: string }) => void;
  changeIsbot: (boolean: boolean) => void;
}

const useStore = create<UseStore>((set) => ({
  messages: getFromLocalStorage("messages")
    ? JSON.parse(getFromLocalStorage("messages") || "{}")
    : [],
  isBotMessage: false,
  addMessage: (messageData: { message: string; time: string }) =>
    set((state) => ({
      messages: [
        {
          id: Math.random() * 100,
          message: messageData.message,
          time: messageData.time,
        },
        ...state.messages,
      ],
    })),
  changeIsbot: (boolean: boolean) =>
    set((state) => ({
      isBotMessage: (state.isBotMessage = boolean),
    })),
}));
export default useStore;
