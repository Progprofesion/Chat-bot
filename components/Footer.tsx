import { useState, useEffect } from "react";
import Image from "next/image";
import TextArea from "../components/TextArea";
import UploadAndDisplayImage from "../components/UploadAndDisplayImage";
import dayjs from "dayjs";
import styles from "../styles/Footer.module.css";
import smile from "../assets/icons/smiley.svg";
import mentios from "../assets/icons/mention.svg";
import useStore from "../store";

const Footer = () => {
  const [message, setMessage] = useState("");
  const messages = useStore((state) => state.messages);
  const addMessage = useStore((state) => state.addMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);
  const isBotMessage = useStore((state) => state.isBotMessage);

  let time = dayjs().format("h:mm A");

  const onClick = (): void => {
    addMessage({ message: message, time: time, isBot: false });
    setMessage("");
    changeIsbot(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onClick();
      event.preventDefault();
    }
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
      <TextArea
        message={message}
        setMessage={setMessage}
        onkeydown={handleKeyDown}
      />
      <div className={styles.sendUpload}>
        <button className={styles.button}>
          <UploadAndDisplayImage />
        </button>
        <button className={styles.button} onClick={() => onClick()}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="paper-airplane" clipPath="url(#clip0_308_243)">
              <path
                id="Icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.59168 2.71245L2.38083 7.25004H7.25001C7.66422 7.25004 8.00001 7.58582 8.00001 8.00004C8.00001 8.41425 7.66422 8.75004 7.25001 8.75004H2.38083L1.59168 13.2876L13.9294 8.00004L1.59168 2.71245ZM0.988747 8.00004L0.0636748 2.68087C-0.0111098 2.25086 0.128032 1.81135 0.436661 1.50272C0.824446 1.11494 1.40926 1.00231 1.91333 1.21834L15.3157 6.9622C15.7308 7.14013 16 7.54835 16 8.00004C16 8.45172 15.7308 8.85995 15.3157 9.03788L1.91333 14.7817C1.40926 14.9978 0.824446 14.8851 0.436661 14.4974C0.128032 14.1887 -0.01111 13.7492 0.0636748 13.3192L0.988747 8.00004Z"
                fill={message.length > 1 ? "#007AFF" : "#8E8E93"}
              />
            </g>
            <defs>
              <clipPath id="clip0_308_243">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
