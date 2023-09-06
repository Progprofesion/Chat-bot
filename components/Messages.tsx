import useStore from "../store";
import dayjs from "dayjs";
import Message from "./Message";
import styles from "../styles/Messages.module.css";
const Messages = () => {
  const messages = useStore((state) => state.messages);
  let data = dayjs().format("DD/MM/YYYY");
  let time = dayjs().format("h:mm A");
  console.log(messages);
  return (
    <section className={styles.messages}>
      <div className={styles.currentTime}>{data}</div>
      {messages.map((message) => {
        return <Message message={message} time={time} />;
      })}
    </section>
  );
};

export default Messages;
