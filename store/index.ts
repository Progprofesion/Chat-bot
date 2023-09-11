import { create } from "zustand";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

interface Message {
  id: number;
  message: string;
  time: string;
  isBot: boolean;
}

interface UseStore {
  messages: Message[];
  isBotMessage: boolean;
  addMessage: (messageData: {
    message: string;
    time: string;
    isBot: boolean;
  }) => void;
  changeIsbot: (boolean: boolean) => void;
  removeMessage: (id: number) => void;
  editMessage: (message: any, newMessage: string) => any;
}

let res = getFromLocalStorage("messages")
  ? JSON.parse(getFromLocalStorage("messages")!)
  : [];

const useStore = create<UseStore>((set) => ({
  messages: res,
  isBotMessage: false,
  addMessage: (messageData) =>
    set((state) => ({
      messages: [
        {
          id: Math.random() * 100,
          message: messageData.message,
          time: messageData.time,
          isBot: messageData.isBot,
        },
        ...state.messages,
      ],
    })),
  changeIsbot: (boolean) =>
    set((state) => ({
      isBotMessage: (state.isBotMessage = boolean),
    })),
  removeMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    })),
  editMessage: (messaget, newMessage) =>
    set((state) => ({
      messages: [
        {
          id: Math.random() * 100,
          message: newMessage,
          time: messaget.time,
          isBot: messaget.isBot,
        },
        ...state.messages,
      ],
    })),
}));
export default useStore;
