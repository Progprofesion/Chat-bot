import Image from "next/image";
import avatar1 from "../assets/icons/avatar1.jpg";
import avatar2 from "../assets/icons/avatar2.jpg";
import avatar3 from "../assets/icons/avatar3.jpg";
import avatar4 from "../assets/icons/avatar4.jpg";
import titleImg from "../assets/icons/titleImg.jpg";
import kebab from "../assets/icons/kebab-horizontal.svg";
import styles from "../styles/Header.module.css";
//  Получение пути для Favicon
import favicon from "../assets/icons/favicon.ico";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.imgWrapp}>
        <Image
          className={styles.avatarImg}
          style={{ left: "0px" }}
          src={avatar1}
          alt="avatar"
        />
        <Image
          className={styles.avatarImg}
          src={avatar2}
          style={{ left: "20px" }}
          alt="avatar"
        />
        <Image
          className={styles.avatarImg}
          src={avatar3}
          style={{ left: "40px" }}
          alt="avatar"
        />
        <Image
          className={styles.avatarImg}
          src={avatar4}
          style={{
            left: "60px",
          }}
          alt="avatar"
        />
      </div>
      <div className={styles.titleWrapp}>
        <h1 className={styles.title}>
          <Image
            src={titleImg}
            style={{
              marginRight: "3px",
              width: "13px",
              height: "12px",
            }}
            alt="avatar"
          />
          Team Unicorns
        </h1>
        <div className={styles.subtitle}>last seen 45 minutes ago</div>
      </div>
      <button className={styles.kebab}>
        <Image src={kebab} alt="avatar" />
      </button>
    </section>
  );
};

export default Header;
