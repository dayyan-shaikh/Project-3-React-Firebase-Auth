import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import auth from "../../firebaseConfig";

function RegisterPage() {
  const { registerFormData, setRegisterFormData, registerWithFirebase, setLoading} =
    useContext(AuthContext);

    const navigate = useNavigate();
  console.log(registerFormData);

  function handleRegisterFormSubmit(event) {
    event.preventDefault();
    registerWithFirebase()
      .then(async (result) => {
        if (result.user) {
          try {
            await updateProfile(result.user, {
              displayName: registerFormData.name,
            }).then(()=>{
              console.log(auth.currentUser.displayName,"auth.currentUser.displayName")
              setLoading(false)
              if(auth.currentUser.displayName) navigate('/profile')
              setRegisterFormData("")
            })
          } catch (error) {
            console.error("Profile update error:", error);
          }
        }
      })
      .catch((error) => console.log("Registration error:", error));
  }

  return (
    <div className="w-full max-w-sm mt-5 mx-auto rounded-lg shadow-lg">
      <div className="px-6 py-5  font-semibold">
        <h3 className="text-center">Welcome to Register page</h3>
        <CommonForm
          formControls={registerFormControls}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterFormSubmit}
          buttonText={"Register"}
        />
        <p className="text-center mt-3">Already have an Account?</p>
        <Link to={"/login"}>
        <button className="w-full block px-5 py-2 mt-3 bg-black text-white border rounded-sm cursor-pointer">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
