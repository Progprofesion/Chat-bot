import { create } from "zustand";
const useStore = create((set) => ({
  messages: ["test"],
  addMessage: (message) =>
    set((state) => ({
      messages: [message, ...state.messages],
    })),
}));
export default useStore;
