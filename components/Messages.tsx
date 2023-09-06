import dayjs from "dayjs";
import Message from "./Message";
import styles from "../styles/Messages.module.css";
const Messages = () => {
  let data = dayjs().format("DD/MM/YYYY");
  let time = dayjs().format("HH:mm");

  return (
    <section className={styles.messages}>
      <div className={styles.currentTime}>{data}</div>
      <Message time={time} />
    </section>
  );
};

export default Messages;
