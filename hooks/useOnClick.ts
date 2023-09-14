import dayjs from "dayjs";
import useStore from "../store";

const useOnClick = () => {
  const isEdit = useStore((state) => state.isEdit);
  const id = useStore((state) => state.id);
  const textMessage = useStore((state) => state.textMessage);
  const editMessage = useStore((state) => state.editMessage);
  const changeIsEdit = useStore((state) => state.changeIsEdit);
  const addMessage = useStore((state) => state.addMessage);
  const addTextMessage = useStore((state) => state.addTextMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);

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

  return onClick;
};

export default useOnClick;
