import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../provider/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = () => {
  const { registerUser,  updateUserProfile, googleLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading,] = useState(false);



  if (loading) {
    toast.loading("Loading...", {
      id: "loading-toast",
    });
    
  }


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log("User logged in successfully:", result.user);

        const { email, displayName: name, photoURL } = result.user;
        axios
          .post(`${import.meta.env.VITE_SERVER_URL}/users`, {
            email,
            name,
            photoURL,
          })
          .then(() => {
            toast.success("User registered successfully");
            navigate(location.state || "/");
          })
          .catch((error) => {
            // console.error("Error saving user data:", error.message);
            toast.error(error.message);
          });
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
    const { name, email, password, photoURL } = newFormData;

    const userData = {
      name: name,
      photoURL: photoURL,
    };

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
       setLoading(false);
      return;
    } else if (!strongPassword.test(password)) {
      setLoading(false);
      toast.error(
        "Password must contain at least one number and one special character"
      );
      return;
    }

    registerUser(email, password)
      .then(() => {
        // console.log("User registered successfully:", result.user);
        // Here you can also update the user's profile with name and photoURL if needed
        updateUserProfile(userData)
          .then(() => {
            // console.log("User profile updated successfully");

            axios
              .post(`${import.meta.env.VITE_SERVER_URL}/users`, {
                email,
                name,
                photoURL,
              })
              .then(() => {
                toast.success("User registered successfully");
                setLoading(false);
                toast.dismiss("loading-toast");
                form.reset();
                navigate(location.state || "/");
              })
              .catch((error) => {
                // console.error("Error saving user data:", error.message);
                toast.error(error.message);
                setLoading(false);
                toast.dismiss("loading-toast");
                form.reset();
              });
          })
          .catch((error) => {
            // console.error("Error updating user profile:", error.message);
            toast.error(error.message);
            setLoading(false);
            toast.dismiss("loading-toast");
            form.reset();
          });
      })
      .catch((error) => {
        // console.error("Error registering user:", error.message);
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
          <title>EduSpark - Register</title>
        </Helmet>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight sm:text-3xl/9">
            Create an account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium ">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>
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
              <label
                htmlFor="photoURL"
                className="block text-sm/6 font-medium "
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  required
                  autoComplete="photoURL"
                  className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Create Account
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
                  className="inline-flex w-full justify-center items-center gap-2 btn btn-soft btn-primary rounded-md bg-white text-sm/6 font-semibold text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <FcGoogle size={20} />
                  Google
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm/6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:text-primary"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
