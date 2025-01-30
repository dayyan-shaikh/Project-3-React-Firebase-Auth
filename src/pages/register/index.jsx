import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
              if(auth.currentUser.displayName) navigate('/login')
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
          buttonText={"Save"}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
