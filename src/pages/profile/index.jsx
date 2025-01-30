import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {

  const { user, handleLogout } = useContext(AuthContext)

  return (
    <div>
      <h3>{user?.displayName}</h3>
      <h3>{user?.email}</h3>
      <button className="bg-black text-white px-4 py-2 rounded-sm cursor-pointer" onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default ProfilePage;
