import Image from "next/image";
import styles from "../styles/BotMessage.module.css";
import avatar4 from "../assets/icons/avatar4.jpg";
import online from "../assets/icons/online.svg";

const Message = ({ time, message }: { time: string; message: string }) => {
  return (
    <div className={styles.botMessage}>
      <Image className={styles.avatar} src={avatar4} alt="Mark" />
      <Image className={styles.online} src={online} alt="Mark" />
      <div className={styles.bubbleTip}>
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C9 0 3.26206 0 1.8 0C0.33795 0 3.14713e-05 1.5 1.35003 3C2.70003 4.5 8.50063 9.5 9 11C9.49936 12.5 9 0 9 0Z"
            fill="#F2F2F7"
          />
          <rect
            width="6"
            height="12"
            transform="matrix(-1 0 0 1 15 0)"
            fill="#F2F2F7"
          />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapp}>
          <p className={styles.name}>Jav</p>
          <p className={styles.workStatus}>Bot</p>
        </div>
        {message}
      </div>
      <div className={styles.time}>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default Message;
