import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import db from "@/lib/supbase/db";
import Dashboardsetup from "@/components/Dashboard-setup";

const DashbaordPage = async () => {
  const supabase = createServerComponentClient({cookies});
  const {data:{user}, 
  } = await supabase.auth.getUser();

  if(!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace,{eq}) => eq(workspace.workspaceOwner, user.id),
  });

  if (!workspace)
  return <div className="bg-background h-screen w-screen flex justify-center items-center">
    
  </div>

  redirect(`/dashboard/${workspace.id}`);
  
}

export default DashbaordPage