import Image from "next/image";
import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Messages />
      <Footer />
    </main>
  );
}
