import { useState, useEffect } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import styles from "../styles/Footer.module.css";
import smile from "../assets/icons/smiley.svg";
import mentios from "../assets/icons/mention.svg";
import paperAirplane from "../assets/icons/paper-airplane.svg";
import useStore from "../store";

const Footer = () => {
  const [name, setName] = useState("");

  const addMessage = useStore((state) => state.addMessage);
  const setTime = useStore((state) => state.setTime);

  const changeIsbot = useStore((state) => state.changeIsbot);
  const isBotMessage = useStore((state) => state.isBotMessage);

  let currentTime = dayjs().format("h:mm A");

  const onClick = (): void => {
    addMessage(name);
    setTime(currentTime);
    setName("");
    changeIsbot(true);
  };

  useEffect(() => {
    if (isBotMessage) {
      addMessage("Hello World!");
      changeIsbot(!isBotMessage);
    }
  }, [isBotMessage]);

  // console.log(time);
  return (
    <footer className={styles.footer}>
      <div className={styles.emoji}>
        <Image src={smile} alt="emojy" />
      </div>
      <input
        value={name}
        placeholder="Start typing..."
        className={styles.input}
        type="text"
        onChange={(e) => setName(e.target.value)}
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
