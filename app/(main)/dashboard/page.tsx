import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import db from "@/lib/supbase/db";
import Dashboardsetup from "@/components/Dashboard-setup";
import { getUserSubcriptionStatus } from "@/lib/supbase/queries";

const DashbaordPage = async () => {
  const supabase = createServerComponentClient({cookies});
  const {data:{user}, 
  } = await supabase.auth.getUser();

  if(!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace,{eq}) => eq(workspace.workspaceOwner, user.id),
  });

  const {data:subscription, error:subscriptionError} = await getUserSubcriptionStatus(user.id);
  if (subscriptionError) return;
  if (!workspace)
  return <div className="bg-background h-screen w-screen flex justify-center items-center">
    <Dashboardsetup user={user} subscription={subscription}></Dashboardsetup>
  </div>

  redirect(`/dashboard/${workspace.id}`);
  
}

export default DashbaordPage