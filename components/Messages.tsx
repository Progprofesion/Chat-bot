import useStore from "../store";
import dayjs from "dayjs";
import Message from "./Message";
import styles from "../styles/Messages.module.css";
const Messages = () => {
  const messages = useStore((state) => state.messages);
  let data = dayjs().format("DD/MM/YYYY");
  let time = dayjs().format("h:mm A");

  return (
    <section className={styles.messages}>
      <div className={styles.currentTime}>{data}</div>
      <div className={styles.messagesWrapp}>
        {messages
          ? messages.map((message) => {
              return (
                <div key={Math.random() * 100}>
                  <Message message={message.message} time={message.time} />
                </div>
              );
            })
          : []}
      </div>
    </section>
  );
};

export default Messages;
