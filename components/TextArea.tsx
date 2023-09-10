import { useEffect, useRef, useState } from "react";
import styles from "../styles/TextArea.module.css";

interface ITextAreaProps {
  message: string;
  setMessage: (message: string) => void;
  onClick: () => void;
}

const TextArea: React.FC<ITextAreaProps> = ({
  message,
  setMessage,
  onClick,
}) => {
  const [key, setKey] = useState<any>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  // This only tracks the auto-sized height so we can tell if the user has manually resized
  const autoHeight = useRef<string>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (
      autoHeight.current !== undefined &&
      ref.current.style.height !== autoHeight.current
    ) {
      // don't auto size if the user has manually changed the height
      return;
    }
    if (message.length > 66) {
      ref.current.style.height = "auto";
      ref.current.style.overflow = "hidden";
      const next = `${ref.current.scrollHeight}px`;
      ref.current.style.height = next;
      autoHeight.current = next;
      ref.current.style.overflow = "auto";
    }

    if (key.key === "Enter") {
      onClick();
      if (ref.current) {
        ref.current.style.maxHeight = "20px";
        ref.current.style.minHeight = "20px";
      }
    }
  }, [message, ref, autoHeight]);

  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === "Enter") {
  //     onClick();
  //     if (ref.current) {
  //       ref.current.style.height = "20px";
  //       event.preventDefault();
  //     }
  //   }
  // };

  return (
    <textarea
      className={styles.textArea}
      ref={ref}
      style={{
        resize: "none",
        minHeight: "20px",
      }}
      placeholder="Start typing..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyDown={(e: any) => setKey(e)}
    />
  );
};

export default TextArea;
