import styles from "../styles/index.module.css";
import Header from "../components/Header";
import dynamic from "next/dynamic";

export default function Home() {
  const Messages = dynamic(() => import("../components/Messages"), {
    ssr: false,
  });
  return (
    <main className={styles.main}>
      <Header />
      <Messages />
    </main>
  );
}
