import { useState } from "react";
import Image from "next/image";
import mentios from "../assets/icons/mention.svg";

const UploadAndDisplayImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>("");

  const handleImageUpload = (event: any) => {
    if (event.target) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <Image alt="not found" width={250} src={selectedImage} height={250} />
        </div>
      )}
      <label
        style={{
          cursor: "pointer",
          display: "flex",
          height: "16px",
        }}
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
