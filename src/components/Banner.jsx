import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react"
import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center md:px-8 md:py-32 px-4 py-8">
      <div className="md:w-1/2 p-4 space-y-3">
        <h1 className="md:text-4xl text-3xl font-bold">Welcome to <motion.span
        animate={{ color:["#454d66", "#309975", "#58b368"] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >EduSpark</motion.span></h1>
        <p className="text-lg">Your journey to knowledge starts here.</p>
        <Link to={"/services"} className="inline-block">
        <button className="btn btn-soft btn-primary rounded">Explore now</button></Link>
      </div>
      <div className="md:w-1/2">
         <DotLottieReact
      src="https://lottie.host/15dd66a4-8480-41b4-8fbd-2e51f47f0807/x3e2kocDC0.lottie"
      loop
      autoplay
    />
      </div>
    </div>
  );
};

export default Banner;
