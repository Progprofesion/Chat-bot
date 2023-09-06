import Image from "next/image";
import avatar1 from "../assets/icons/avatar1.png";
import avatar2 from "../assets/icons/avatar2.png";
import avatar3 from "../assets/icons/avatar3.png";
import avatar4 from "../assets/icons/avatar4.png";
import kebab from "../assets/icons/kebab-horizontal.svg";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.imgWrapp}>
        <Image src={avatar1} alt="GFG logo imported from public directory" />
        <Image src={avatar2} alt="GFG logo imported from public directory" />
        <Image src={avatar3} alt="GFG logo imported from public directory" />
        <Image src={avatar4} alt="GFG logo imported from public directory" />
      </div>
      <div className="header__titleWrapp">
        <div className="header__title">🦄 Team Unicorns</div>
        <div className="header__subtitle">last seen 45 minutes ago</div>
      </div>
      <button className={styles.kebab}>
        <Image src={kebab} alt="GFG logo imported from public directory" />
      </button>
    </section>
  );
};

export default Header;
