import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";
export default function getServerActionPage() {
  const whoAmI = async () => {
    "use server";
    const session = await getServerSession();

    return session?.user?.name || "Not logged In";
  };

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}
