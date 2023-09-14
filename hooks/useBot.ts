import { useEffect } from "react";
import useStore from "../store";
import dayjs from "dayjs";

const useBot = () => {
  let time = dayjs().format("h:mm A");
  const messages = useStore((state) => state.messages);
  const isBotMessage = useStore((state) => state.isBotMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);
  const addMessage = useStore((state) => state.addMessage);

  useEffect(() => {
    if (isBotMessage) {
      addMessage({ message: "Hello World!", time: time, isBot: true });
      changeIsbot(!isBotMessage);
    }
    let data = JSON.stringify(messages);
    localStorage.setItem("messages", data);
  }, [messages]);
};

export default useBot;
