import dynamic from "next/dynamic";

export default function Home() {
  const Messages = dynamic(() => import("../components/Messages"), {
    ssr: false,
  });
  return (
    <main style={{ boxShadow: "0px 0px 0px 1px #E5E5EA inset" }}>
      <Messages />
    </main>
  );
}
