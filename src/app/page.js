"use client";
import { getServerSession } from "next-auth";
import Button from "../components/button/Button.jsx";
import {
  handleButtion,
  lightBlueBtn,
  svg,
} from "../components/button/buttonMetadata.jsx";

export default function Home() {
  const session = async () => {
    const session = await getServerSession();
    return session;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>getServerSession Result</p>
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>not logged in</div>
      )}
      <div className="absolute top-15 left-40">
        <Button
          style={lightBlueBtn.style}
          btnLabel={lightBlueBtn.btnLabel}
          svg={svg}
          handleButtion={handleButtion}
        />
      </div>
    </main>
  );
}
