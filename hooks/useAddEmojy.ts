import useStore from "../store";
import smile from "../assets/icons/smiley.svg";
import dayjs from "dayjs";

const useAddEmoji = (): ((e: React.MouseEvent<HTMLButtonElement>) => void) => {
  const addMessage = useStore((state) => state.addMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);

  const handleEmoji = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let time = dayjs().format("h:mm A");
    if (e) e.preventDefault();

    addMessage({
      message: "",
      time: time,
      isBot: false,
      img: smile,
      isSmile: true,
    });
    changeIsbot(true);
  };

  return handleEmoji;
};

export default useAddEmoji;
