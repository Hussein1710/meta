import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <div
      className="bg-[#fff] flex justify-between items-center border-b shadow sticky top-0 px-4 py-4
    "
    >
      <div className="flex items-center gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
          alt="Logo"
          className="w-20"
        />

        <div className="flex gap-3 justify-start">
          <div className="flex justify-center items-center gap-1">
            <p className="text-md">Meta Quest</p>
            <MdKeyboardArrowDown />
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="text-md">Ray Ban | Meta</p>
            <MdKeyboardArrowDown />
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="text-md">Apps and games</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
          </div>

        <div className="flex justify-end gap-3">
          <div className="flex justify-center items-center">
            <p>About Meta</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="text-md">Support</p>
            <MdKeyboardArrowDown />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-2 border border-gray-300 rounded-lg px-1 py-1"
          >
            <LuSearch />
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search Meta Store"
              className="outline-none"
            />
            {/* <button type="submit">Search</button> */}
          </form>

          <div className="flex justify-center items-center gap-2">
            <HiOutlineShoppingBag size={28} />
            <RxAvatar size={28} />
          </div>
        </div>
    </div>
  );
};

export default Navbar;
