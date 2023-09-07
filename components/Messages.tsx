import useStore from "../store";
import dayjs from "dayjs";
import Message from "./Message";
import styles from "../styles/Messages.module.css";
const Messages = () => {
  const messages = useStore((state) => state.messages);
  let data = dayjs().format("DD/MM/YYYY");
  // let time = dayjs().format("h:mm A");
  let time = useStore((state) => state.time);

  return (
    <section className={styles.messages}>
      <div className={styles.currentTime}>{data}</div>
      <div className={styles.messagesWrapp}>
        {messages.map((message: any, i) => {
          for (let key in message) {
            // console.log(message[key]);
            return (
              <div key={Math.random() * 1000}>
                <Message message={key} time={message[key]} />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Messages;
