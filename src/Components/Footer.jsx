import React from 'react'

const Footer = () => {
  return (
    <div className="pb-14 bg-white-300 pt-14 ">
    <div className="flex-col">
      <div className="flex flex-col  border-t-[#EAE9FB] border-y-2 pt-8 md:flex-row justify-between w-full max-w-screen-xl   gap-7 px-6 mx-auto sm:px-8 lg:px-16 ">
        <div className="flex w-full flex-col gap-6  min-h-[240px] bg-[#7165E3] md:w-[320px]  p-7 mb-8 rounded-3xl justify-center items-center col-start-1 col-end-12 row-span-2 sm:col-span-4 sm:col-start-1 sm:col-end-4">
          <div className="flex items-center justify-between gap-16">
            <div className="flex gap-2">
              <img src={Justlogo} className="w-12 h-12" alt="Swift Logo" />
              <div className="flex flex-col">
                <h2 className=" text-[#FFF]">Swift</h2>
                <p className="text-[#E5E5E5C2]">@app_swiftNG</p>
              </div>
            </div>
            <div className="">
              <img
                src={PajamasTwitter}
                className=" bg-slate-100 "
                alt="Twitter Logo"
              />
            </div>
          </div>

          <p className="items-stretch text-center leading-5 text-[18px] text-[#FFF] font-normal">
            We've just announced new features that would help you increase
            your experience of using swift!
          </p>
        <button className="w-full bg-[#fff] my-8 sm:my-10 p-4 text-slate-950 font-bold text-xl md:text-2xl rounded-3xl login_btn cursor-pointer">
          <Link
            to="/admin-login"
            className="items-stretch text-center leading-5 text-[18px]  font-normal"
          >
            <p>Sign in as Admin</p>
          </Link>
        </button>
        </div>

        <div className="flex w-full md:w-[60%] gap-3 xs:gap-2 justify-between  flex-wrap">
          <div className="flex flex-col w-[160px] xs:w-[180px] col-span-5 row-span-2 sm:col-span-6 sm:col-start-5 sm:col-end-6">
            <p className="mb-4 text-2xl font-bold leading-10 text-black-600">
              Services
            </p>
            <ul className="text-[#616161] ">
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Data Bundle Purchase </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Airtime TopUp </Link>
              </li>
              <li className="flex gap-1 my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Betting</Link>
                <span className="w-[60px] h-[20px] text-[7px] text-[#7165E3] text-center mb-1 py-1 font-semibold rounded-2xl bg-[#F0CC48]">
                  Coming soon
                </span>
              </li>
              <li className="flex gap-1 my-2 transition-all cursor-pointer font-semibold text-sm hover:text-[#7165E3]">
                <Link to="" className="">
                  Tv Subscribe
                </Link>
                <span className="w-[80px] h-[20px] text-[7px] text-[#7165E3] text-center mb-1 font-semibold rounded-2xl bg-[#F0CC48]">
                  Coming soon
                </span>
              </li>
              <li className="flex gap-1 my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Electricity</Link>
                <span className="w-[80px] h-[20px] text-[7px] text-[#7165E3] text-center mb-1 py-1 font-semibold rounded-2xl bg-[#F0CC48]">
                  Coming soon
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-30 xs:w-36 col-span-4 row-span-2 sm:col-span-6 sm:col-start-6 sm:col-end-7">
            <p className="mb-4 text-2xl font-bold leading-10 text-black-600">
              Company
            </p>
            <ul className="text-[#616161] ">
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Blog </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="/About-us">About Us </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Join Our Team</Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Developer </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-5 row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-8">
            <p className="mb-4 text-2xl font-bold leading-10 text-black-600">
              Help
            </p>
            <ul className="text-[#616161]">
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="/faq">FAQs </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Security </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Get Help </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="/contact-us">Contact Us </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-4 row-span-2 sm:col-span-2 sm:col-start-8 sm:col-end-9">
            <p className="mb-4 text-2xl font-bold leading-10 text-black-600">
              Transparency
            </p>
            <ul className="text-[#616161]">
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Terms & Conditions </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="/privacy-policy">Privacy Policy </Link>
              </li>
              <li className="my-2 transition-all cursor-pointer font-semibold text-md hover:text-[#7165E3]">
                <Link to="">Cookie Policy </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="items-center w-full max-w-screen-xl px-6 mx-auto sm:px-8 lg:px-16">
        <div className="my-4  "></div>
        <div className="flex flex-col justify-center text-center md:justify-between md:flex-row">
          <p className="font-bold text-[#4F4F4F] md:text-lg text-sm">
            ©{new Date().getFullYear()} SwiftVista All rights reserved.
          </p>
          <a
            className="font-bold text-[#7165E3] md:text-lg text-sm"
            href="mailto:support@swiftvistaapp.com"
          >
            support@swiftvistaapp.com
          </a>
        </div>
        <div className="flex flex-wrap  flex-col md:flex-row  justify-between items-center md:flex mt-2 text-center ">
          <div className="flex  items-center justify-center md:justify-start  md:w-1/2 w-full  gap-2  h-1/2">
            <img
              src={AppStore}
              alt="Appstore coming soon"
              className="items-center  h-14"
            />
            <img
              src={PlayStore}
              alt="Playstore coming soon"
              className="items-center h-14"
            />
          </div>
          <div className="flex md:w-1/2 w-full justify-center md:justify-end  py-4">
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md">
              <img src={Instagram} className="w-6 h-6" alt="" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md">
              <img src={Facebook} className="w-6 h-6" alt="" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md">
              <img src={Twitter} className="w-6 h-6" alt="" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md">
              <img src={Linkedin} className="w-6 h-6" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer