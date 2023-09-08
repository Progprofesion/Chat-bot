import Image from "next/image";
import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

export default function Home() {
  const Messages = dynamic(() => import("../components/Messages"), {
    ssr: false,
  });
  return (
    <main className={styles.main}>
      <Header />
      <Messages />
      <Footer />
    </main>
  );
}
