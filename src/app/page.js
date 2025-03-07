import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>getServerSession Result</p>
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>not logged in</div>
      )}
    </main>
  );
}
