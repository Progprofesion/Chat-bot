import { useEffect, useRef, useState } from "react";
import styles from "../styles/TextArea.module.css";
import useStore from "../store";

interface ITextAreaProps {
  message: string;
  setMessage: (message: string) => void;
  onkeydown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({
  message,
  setMessage,
  onkeydown,
}) => {
  const [key, setKey] = useState<any>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const autoHeight = useRef<string>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (
      autoHeight.current !== undefined &&
      ref.current.style.height !== autoHeight.current
    ) {
      return;
    }

    ref.current.style.height = "1px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, [message, ref, autoHeight]);

  return (
    <textarea
      className={styles.textArea}
      ref={ref}
      style={{
        resize: "none",
        height: "20px",
      }}
      placeholder="Start typing..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyDown={onkeydown}
    />
  );
};

export default TextArea;
