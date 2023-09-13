import Image from "next/image";
import dayjs from "dayjs";
import mentios from "../assets/icons/mention.svg";
import useStore from "../store";

const UploadAndDisplayImage: React.FC = () => {
  const addMessage = useStore((state) => state.addMessage);
  const changeIsbot = useStore((state) => state.changeIsbot);
  let time = dayjs().format("h:mm A");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      addMessage({
        message: "",
        time: time,
        isBot: false,
        img: reader.result as string,
        isSmile: false,
      });
      changeIsbot(true);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label
        style={{ cursor: "pointer", display: "flex", height: "16px" }}
        htmlFor="fusk"
      >
        <Image src={mentios} alt="@" />
      </label>
      <input
        type="file"
        id="fusk"
        name="myImg"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
