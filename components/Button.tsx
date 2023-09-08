import { DeleteOutlined } from "@ant-design/icons";
import Image from "next/image";
import useStore from "../store";
const Button = (id: number) => {
  const removeMessage = useStore((state) => state.removeMessage);
  return (
    <button onClick={(e) => removeMessage(id)}>
      <DeleteOutlined />
    </button>
  );
};

export default Button;
