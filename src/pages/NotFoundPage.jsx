import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
           <div>
             <DotLottieReact
      src="https://lottie.host/25c771ca-84e6-4d31-939e-ddcc3ef12f9e/f9svruT4bk.lottie"
      loop
      autoplay
    />
           </div>
            <p className="mt-4 text-gray-700 text-2xl">Sorry, the page you are looking for does not exist.</p>
            <p className="mt-2 text-gray-500">Please check the URL or return to the homepage.</p>
            <Link to="/" className="mt-6 btn btn-soft btn-primary rounded">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;