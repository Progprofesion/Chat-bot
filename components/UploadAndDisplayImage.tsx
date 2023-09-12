import Image from "next/image";
import mentios from "../assets/icons/mention.svg";
import useStore from "../store";

const UploadAndDisplayImage: React.FC = () => {
  const setImg = useStore((state) => state.setImg);
  const img = useStore((state) => state.img);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {img && (
        <div>
          <Image alt="not found" width={250} src={img as any} height={250} />
        </div>
      )}
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
