import { useState } from "react";
import Image from "next/image";
import mentios from "../assets/icons/mention.svg";

const UploadAndDisplayImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
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
        onChange={(event) => {
          setSelectedImage(event.target.files![0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
