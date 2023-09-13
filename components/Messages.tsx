import Header from "../components/Header";
import useStore from "../store";
import dayjs from "dayjs";
import Message from "./Message";
import BotMessage from "./BotMessage";
import Form from "../components/Form";
import styles from "../styles/Messages.module.css";

const Messages = () => {
  const messages = useStore((state) => state.messages);

  let data = dayjs().format("DD/MM/YYYY");

  return (
    <section className={styles.messages}>
      <Header />
      <Form />
      <div className={styles.currentTime}>{data}</div>
      <ul className={styles.messagesWrapp}>
        {messages
          ? messages.map((message) => {
              if (message.id) {
                return (
                  <div
                    className={
                      message.isBot ? styles.botMessage : styles.userMessage
                    }
                    key={Math.random() * 100}
                  >
                    {message.isBot ? (
                      <BotMessage
                        message={message.message}
                        time={message.time}
                      />
                    ) : (
                      <Message
                        message={message.message}
                        time={message.time}
                        id={message.id}
                        img={message.img ? message.img : ""}
                        classForImg={message.isSmile ? "" : styles.upImg}
                      />
                    )}
                  </div>
                );
              }
            })
          : null}
      </ul>
    </section>
  );
};

export default Messages;
