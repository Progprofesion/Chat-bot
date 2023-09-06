import Image from "next/image";
import styles from "../styles/Message.module.css";
import mark from "../assets/icons/Frame 2882.svg";
const Message = ({ time, message }) => {
  return (
    <div className={styles.message}>
      <div className={styles.content}>{message}</div>
      <div className={styles.time}>
        {time} <Image className={styles.mark} src={mark} alt="Mark" />
      </div>
    </div>
  );
};

export default Message;
