import { useState, useEffect } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import styles from "../styles/Footer.module.css";
import smile from "../assets/icons/smiley.svg";
import mentios from "../assets/icons/mention.svg";
import paperAirplane from "../assets/icons/paper-airplane.svg";
import useStore from "../store";

const Footer = () => {
  const [message, setMessage] = useState("");
  const messages = useStore((state) => state.messages);
  const addMessage = useStore((state) => state.addMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);
  const isBotMessage = useStore((state) => state.isBotMessage);
  const removeMessage = useStore((state) => state.removeMessage);
  let time = dayjs().format("h:mm A");

  const onClick = (): void => {
    addMessage({ message: message, time: time, isBot: false });
    setMessage("");
    changeIsbot(true);
  };

  useEffect(() => {
    if (isBotMessage) {
      addMessage({ message: "Hello World!", time: time, isBot: true });
      changeIsbot(!isBotMessage);
    }
    let data = JSON.stringify(messages);
    localStorage.setItem("messages", data);
  }, [messages]);

  return (
    <footer className={styles.footer}>
      <div className={styles.emoji}>
        <Image src={smile} alt="emojy" />
      </div>
      <input
        value={message}
        placeholder="Start typing..."
        className={styles.input}
        type="text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={styles.sendUpload}>
        <button className={styles.button}>
          <Image src={mentios} alt="@" />
        </button>
        <button className={styles.button} onClick={() => onClick()}>
          <Image src={paperAirplane} alt="Paper airplane" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
