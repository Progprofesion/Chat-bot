import { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import useStore from "../store";
import mentios from "../assets/icons/mention.svg";

const UploadAndDisplayImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const uploadImg = useStore((state) => state.uploadImg);
  let time = dayjs().format("h:mm A");
  // addMessage({
  //   message: URL.createObjectURL(selectedImage!),
  //   time: "time",
  //   isBot: false,
  // });

  // const test = (img: string) => {
  //   uploadImg({
  //     img: ttt,
  //     time: time,
  //     isBot: false,
  //   });
  // };

  // const ttt = () => {
  //   if (selectedImage) {
  //     return (
  //       <div>
  //         <img
  //           alt="not found"
  //           width={"250px"}
  //           src={URL.createObjectURL(selectedImage)}
  //         />
  //       </div>
  //     );
  //   }
  // };

  return (
    <div>
      {selectedImage && (
        <div>
          <Image
            alt="not found"
            width={250}
            src={URL.createObjectURL(selectedImage)}
            height={250}
            objectFit="cover"
          />
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
        onChange={(event) => {
          setSelectedImage(event.target.files![0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
