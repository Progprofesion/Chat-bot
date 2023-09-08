import useStore from "../store";
import dayjs from "dayjs";
import Message from "./Message";
import BotMessage from "./BotMessage";
import styles from "../styles/Messages.module.css";
const Messages = () => {
  const messages = useStore((state) => state.messages);
  let data = dayjs().format("DD/MM/YYYY");
  const isBotMessage = useStore((state) => state.isBotMessage);
  return (
    <section className={styles.messages}>
      <div className={styles.currentTime}>{data}</div>
      <ul className={styles.messagesWrapp}>
        {messages
          ? messages.map((message) => {
              console.log(message);
              return (
                <div
                  className={
                    message.isBot ? styles.botMessage : styles.userMessage
                  }
                  key={Math.random() * 100}
                >
                  {message.isBot ? (
                    <BotMessage message={message.message} time={message.time} />
                  ) : (
                    <Message message={message.message} time={message.time} />
                  )}
                </div>
              );
            })
          : null}
      </ul>
    </section>
  );
};

export default Messages;
