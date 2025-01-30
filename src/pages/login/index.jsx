import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const { loginFormData, setLoginFormData, loginWithFirebase, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  function handleLoginOnSubmit(event) {
    event.preventDefault();

    loginWithFirebase().then((result) => {
      console.log(result, "result");
      if (result) {
        setLoading(false);
        navigate("/profile");
      }
    });
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-lg mt-5">
      <div className="px-6 py-5">
        <h1 className="text-center items-center">Welcome back to Login page</h1>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={"Login"}
          onSubmit={handleLoginOnSubmit}
        />
        <Link to={"/"}>
          <button className="w-full block px-5 py-2 mt-2 bg-black text-white border rounded-sm cursor-pointer">
            Back to Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
