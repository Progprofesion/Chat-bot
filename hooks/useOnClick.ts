import dayjs from "dayjs";
import useStore from "../store";

interface IonClick {
  (
    e:
      | React.KeyboardEvent<Element>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void;
}

const useOnClick: () => IonClick = () => {
  // Состояние режима редкатирования
  const isEdit = useStore((state) => state.isEdit);
  // Переключение режима редактирования
  const changeIsEdit = useStore((state) => state.changeIsEdit);
  // id сообщения
  const id = useStore((state) => state.id);
  // Текущее состояние ввода
  const textMessage = useStore((state) => state.textMessage);
  // Изменить состояние ввода
  const addTextMessage = useStore((state) => state.addTextMessage);
  // Изменить сообщение
  const editMessage = useStore((state) => state.editMessage);
  // Отправляет сообщение
  const addMessage = useStore((state) => state.addMessage);
  // Добавляет ответ бота
  const changeIsbot = useStore((state) => state.changeIsbot);

  let time = dayjs().format("h:mm A");

  const onClick: IonClick = (e) => {
    window.scrollTo(0, document.body.scrollHeight);
    if (e) {
      e.preventDefault();
    }
    if (isEdit) {
      editMessage(id, textMessage);
      changeIsEdit(false);
    } else if (textMessage) {
      addMessage({ message: textMessage, time: time });

      changeIsbot(true);
    }
    addTextMessage("");
  };

  return onClick;
};

export default useOnClick;
