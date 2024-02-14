import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here, such as sending the email to your server
    console.log("Email submitted:", email);
    // Reset the email input
    setEmail("");
  };
  return (
    <div className="m-10 mt-10 md:mt-24 block md:flex justify-between border-b-2 w-full">
      
      <div className="w-full mb-8 md:mb-0">
        <h1 className="text-gray-400">
          KEEP YOUR EXPERIENCE UP TO DATE
        </h1>
      </div>
     
      <div className="block md:flex flex-col gap-8 w-full mb-24">
        <form className="block md:flex gap-4">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Get news and update from Meta"
            className="border border-gray-300 rounded-l px-4 py-2 w-[70%] focus:outline-none focus:ring focus:border-blue-500"
          />
          <button className="bg-white text-blue-600 rounded-3xl px-3 py-1 border border-gray-300 w-[20%] hover:cursor-pointer">
            Sign up
          </button>
        </form>

        <p className="text-gray-600 w-[80%] text-sm">
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
