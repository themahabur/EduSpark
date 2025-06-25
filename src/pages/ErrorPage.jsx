import React from "react";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div>
        <DotLottieReact
          src="https://lottie.host/acfec7b6-a69d-462e-9527-782cf1f69b9a/1eMEIdZRoj.lottie"
          loop
          autoplay
        />
      </div>
      <p className="mt-4 text-gray-800 text-2xl"> Sorry, something went wrong.  </p>

     <button
      onClick={() => window.location.reload()}
      className="mt-6 btn bg-primary text-white rounded ">Try again</button>
    </div>
  );
};

export default ErrorPage;
