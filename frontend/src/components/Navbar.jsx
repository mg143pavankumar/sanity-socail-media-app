import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setSearchItem, searchItem }) => {
  const navigate = useNavigate();
  if (user) {
    return (
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
        <div className="flex justify-start items-center w-full px-2 rounded-lg bg-white border-none outline-none focus-within:shadow-md">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search"
            value={searchItem}
            onFocus={() => navigate("/search")}
            className="p-2 w-full bg-white outline-none rounded-lg"
          />
        </div>

        <div className="flex gap-3">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img
              src={user.image}
              className="w-14 h-12 rounded-lg"
              alt="user_image"
            />
          </Link>
          <Link
            to="/create-pin"
            className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
          >
            <IoMdAdd />
          </Link>
        </div>
      </div>
    );
  }
  return null;
};

export default Navbar;