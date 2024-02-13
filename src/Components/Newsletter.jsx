import React from "react";

const Newsletter = () => {
  return (
    <div className="mt-10 flex">
      <div className="">
        <h1 className="text-gray-400">KEEP YOUR EXPERIENCE UP TO DATE</h1>
      </div>
      <div className="flex">
        <form className="flex justify-center items-center gap-2 w-[60%] border border-gray-300 px-4 py-4">
          <input
            type="email"
            //   value={query}
            //   onChange={handleChange}
            placeholder="Get news and update from Meta"
            className="outline-none"
            
          />
        </form>
          <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-36 hover:cursor-pointer">
              Sign up
            </button>

        <p className="text-gray-600">
          By signing up you agree to receive updates and marketing messages
          (e.g. email, social, etc.) from Meta about Meta’s existing and future
          products and services. You may withdraw your consent and unsubscribe
          at any time by clicking the unsubscribe link included in our messages.
          Your subscription is subject to the Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
