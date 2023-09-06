import Image from "next/image";
import styles from "../styles/Footer.module.css";
import smile from "../assets/icons/smiley.svg";
import mentios from "../assets/icons/mention.svg";
import paperAirplane from "../assets/icons/paper-airplane.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.emoji}>
        <Image src={smile} alt="GFG logo imported from public directory" />
      </div>
      <input
        placeholder="Start typing..."
        className={styles.input}
        type="text"
      />
      <div className={styles.sendUpload}>
        <Image src={mentios} alt="GFG logo imported from public directory" />
        <Image
          src={paperAirplane}
          alt="GFG logo imported from public directory"
        />
      </div>
    </footer>
  );
};

export default Footer;
