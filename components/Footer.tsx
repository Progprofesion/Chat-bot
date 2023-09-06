import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import smile from "../assets/icons/smiley.svg";
import mentios from "../assets/icons/mention.svg";
import paperAirplane from "../assets/icons/paper-airplane.svg";
import useStore from "../store";

const Footer = () => {
  const [name, setName] = useState("");
  const messages = useStore((state) => state.messages);
  const addMessage = useStore((state) => state.addMessage);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const onClick = (): void => {
    addMessage(name);
    console.log(name);
  };
  console.log(messages);
  return (
    <footer className={styles.footer}>
      <div className={styles.emoji}>
        <Image src={smile} alt="emojy" />
      </div>
      <input
        placeholder="Start typing..."
        className={styles.input}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div className={styles.sendUpload}>
        <button>
          <Image src={mentios} alt="@" />
        </button>
        <button onClick={() => onClick()}>
          <Image src={paperAirplane} alt="Paper airplane" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
