import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export default function Logout() {
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    await logout(undefined).unwrap;
    window.location.reload();
    toast.success("Logout successfully");
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
