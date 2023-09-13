import { create } from "zustand";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

interface Message {
  id?: number | undefined;
  message: string;
  time: string;
  isBot: boolean;
  img?: string;
}

interface UseStore {
  id: number;
  textMessage: string;
  messages: Message[];
  isBotMessage: boolean;
  isEdit: boolean;
  isImg: boolean;
  setIsImg: (boolean: boolean) => void;
  addTextMessage: (message: string) => void;
  addMessage: (messageData: Message) => void;
  changeIsbot: (boolean: boolean) => void;
  changeIsEdit: (boolean: boolean, message?: string, id?: number) => void;
  removeMessage: (id: number) => void;
  editMessage: (id: number, newMessage: string) => void;
}

const res = getFromLocalStorage("messages")
  ? JSON.parse(getFromLocalStorage("messages")!)
  : [];

const useStore = create<UseStore>((set) => ({
  id: 0,
  messages: res,
  textMessage: "",
  isBotMessage: false,
  isEdit: false,
  isImg: false,
  addMessage: (messageData) =>
    set((state) => ({
      messages: [
        {
          id: Math.floor(Math.random() * 10000) + 1,
          message: messageData.message,
          time: messageData.time,
          isBot: messageData.isBot,
          img: messageData.img,
        },
        ...state.messages,
      ],
    })),
  addTextMessage: (message) =>
    set(() => ({
      textMessage: message,
    })),
  changeIsEdit: (boolean, message, id) =>
    set(() => ({
      id: id,
      isEdit: boolean,
      textMessage: message,
    })),
  changeIsbot: (boolean) =>
    set(() => ({
      isBotMessage: boolean,
    })),
  removeMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    })),
  editMessage: (id, newMessage: string) =>
    set((state) => ({
      isEdit: true,
      messages: state.messages.map((m) =>
        m.id === id ? { ...m, message: newMessage } : m
      ),
    })),
  setIsImg: (boolean) =>
    set(() => ({
      isImg: boolean,
    })),
}));

export default useStore;
