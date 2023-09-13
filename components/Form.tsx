import { useEffect } from "react";
import Image from "next/image";
import TextArea from "./TextArea";
import UploadAndDisplayImage from "../components/UploadAndDisplayImage";
import dayjs from "dayjs";
import styles from "../styles/Form.module.css";
import smile from "../assets/icons/smiley.svg";
import useStore from "../store";

const Form = () => {
  const messages = useStore((state) => state.messages);
  const addMessage = useStore((state) => state.addMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);
  const isBotMessage = useStore((state) => state.isBotMessage);
  const changeIsEdit = useStore((state) => state.changeIsEdit);
  const addTextMessage = useStore((state) => state.addTextMessage);
  const textMessage = useStore((state) => state.textMessage);
  const editMessage = useStore((state) => state.editMessage);
  const id = useStore((state) => state.id);
  const isEdit = useStore((state) => state.isEdit);

  let time = dayjs().format("h:mm A");

  const onClick = (
    e:
      | React.KeyboardEvent<Element>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (e) {
      e.preventDefault();
    }
    if (isEdit) {
      editMessage(id, textMessage);
      changeIsEdit(false);
    } else if (textMessage) {
      addMessage({ message: textMessage, time: time, isBot: false });
      changeIsbot(true);
    }
    addTextMessage("");
  };

  const emojy = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e) {
      e.preventDefault();
    }

    addMessage({
      message: "",
      time: time,
      isBot: false,
      img: smile,
      isSmile: true,
    });
    changeIsbot(true);
  };

  useEffect(() => {
    if (isBotMessage) {
      addMessage({ message: "Hello World!", time: time, isBot: true });
      changeIsbot(!isBotMessage);
    }
    let data = JSON.stringify(messages);
    localStorage.setItem("messages", data);
  }, [messages]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onClick(event);
      event.preventDefault();
    }
  };

  return (
    <form className={styles.form}>
      {isEdit ? <p className={styles.edit}>Редактирование</p> : null}
      {isEdit ? (
        <button
          onClick={() => {
            changeIsEdit(false);
            addTextMessage("");
          }}
          className={styles.cancelEdit}
        >
          X
        </button>
      ) : null}
      <button onClick={emojy} className={styles.emoji}>
        <Image src={smile} alt="emojy" />
      </button>
      <TextArea
        message={textMessage}
        setMessage={addTextMessage}
        onkeydown={(e) => handleKeyDown(e)}
      />
      <div className={styles.sendUpload}>
        <UploadAndDisplayImage />
        <button
          aria-label="Send button"
          className={styles.button}
          onClick={onClick}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="paper-airplane" clipPath="url(#clip0_308_243)">
              <path
                id="Icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.59168 2.71245L2.38083 7.25004H7.25001C7.66422 7.25004 8.00001 7.58582 8.00001 8.00004C8.00001 8.41425 7.66422 8.75004 7.25001 8.75004H2.38083L1.59168 13.2876L13.9294 8.00004L1.59168 2.71245ZM0.988747 8.00004L0.0636748 2.68087C-0.0111098 2.25086 0.128032 1.81135 0.436661 1.50272C0.824446 1.11494 1.40926 1.00231 1.91333 1.21834L15.3157 6.9622C15.7308 7.14013 16 7.54835 16 8.00004C16 8.45172 15.7308 8.85995 15.3157 9.03788L1.91333 14.7817C1.40926 14.9978 0.824446 14.8851 0.436661 14.4974C0.128032 14.1887 -0.01111 13.7492 0.0636748 13.3192L0.988747 8.00004Z"
                fill={
                  textMessage && textMessage.length > 1 ? "#007AFF" : "#8E8E93"
                }
              />
            </g>
            <defs>
              <clipPath id="clip0_308_243">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
