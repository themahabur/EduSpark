import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../provider/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, loading, setLoading, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        // console.log("User logged in successfully:", result.user);
        toast.success("User logged in successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        // console.error("Error logging in:", error.message);
        toast.error(error.message);
      });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (loading) {
      toast.loading("Loading...", {
        id: "loading-toast",
      });
    }
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());
    // console.log(newFormData);
    const { email, password } = newFormData;
    loginUser(email, password)
      .then(() => {
        // console.log("User logged in successfully:", result.user);
        toast.success("User logged in successfully");
        setLoading(false);

        toast.dismiss("loading-toast");

        form.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        // console.error("Error logging in:", error.message);
        toast.error(error.message);
        setLoading(false);

        toast.dismiss("loading-toast");
        form.reset();
      });
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Helmet>
          <title>EduSpark - Login</title>
        </Helmet>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight sm:text-3xl/9">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-primary hover:text-primary"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-base px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign in
              </button>
            </div>
          </form>
          <div>
            <div className="mt-4">
              <div className="relative">
                <div className="relative flex justify-center text-sm/6">
                  <span className="bg-base px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-white btn text-sm/6 font-semibold text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <FcGoogle size={20} />
                  Google
                </button>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:text-primary"
            >
              Create a new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
