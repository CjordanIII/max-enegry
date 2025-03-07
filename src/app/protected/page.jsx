import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <p> this is a protected route.</p>
      <br />
      <p>You will only see this if you are authenticated.</p>
    </div>
  );
}
