import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {

  const { user, handleLogout } = useContext(AuthContext)

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-lg flex flex-col items-center mt-5 gap-5 py-5">
      <h3 className="font-semibold text-2xl">{user?.displayName}</h3>
      <h3 className="font-semibold text-2xl">{user?.email}</h3>
      <button className="bg-black text-white px-4 py-2 rounded-sm cursor-pointer" onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default ProfilePage;
