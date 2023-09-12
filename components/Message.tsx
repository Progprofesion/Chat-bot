import Image from "next/image";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../styles/Message.module.css";
import mark from "../assets/icons/Frame 2882.svg";
import useStore from "../store";

interface Imesage {
  time: string;
  message: string;
  id: number;
  img: string;
}

const Message = ({ time, message, id, img }: Imesage) => {
  const removeMessage = useStore((state) => state.removeMessage);
  const changeIsEdit = useStore((state) => state.changeIsEdit);

  return (
    <div className={styles.message}>
      <div className={styles.bubbleTip}>
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0C6 0 11.7379 0 13.2 0C14.6621 0 15 1.5 13.65 3C12.3 4.5 6.49937 9.5 6 11C5.50064 12.5 6 0 6 0Z"
            fill="#007AFF"
          />
          <rect width="6" height="12" fill="#007AFF" />
        </svg>
      </div>
      <div className={styles.content}>
        {message}
        {img && <Image alt="not found" src={img as any} />}
      </div>
      <div className={styles.time}>
        <div className={styles.timeMarkWrapp}>
          <div>{time}</div>
          <Image className={styles.mark} src={mark} alt="Mark" />
        </div>
      </div>
      <div className={styles.buttonWrapp}>
        <button
          className={styles.editBtn}
          onClick={() => changeIsEdit(true, message, id)}
        >
          <EditOutlined />
        </button>
        <button className={styles.removeBtn} onClick={() => removeMessage(id)}>
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};

export default Message;
