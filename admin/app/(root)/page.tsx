import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
 return (
   <div>
    <UserButton afterSignOutUrl="/" />
     This is a protected page. You must be signed in to access it.
   </div>
 )
}