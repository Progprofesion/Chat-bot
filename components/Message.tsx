import styles from "../styles/Message.module.css";
const Message = ({ time }) => {
  return (
    <div className={styles.message}>
      <div className={styles.content}>Message</div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default Message;
