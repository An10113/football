import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Auth from "./Auth";
import { auth } from "@/firebase";

function Nav() {
  const user = auth.currentUser;
  return (
    <div className="">
      <div className="w-full bg-[#6D9F71]">
        <div className="max-w-[1200px] flex m-auto items-center p-2 justify-between">
          <div className="flex items-center ">
            <a to="/">
              <img className="w-10 h-10 " src="./img/letter-a.png" alt="" />
            </a>
            <h2 className="bold ml-3 hidden md:flex">All About Football</h2>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="p-3">
                <FaUserAlt size={24} color="#e4e3d3"/>
                <BiLogOut size={24} color="#e4e3d3"/>
              </div>
            ) : (
              <Auth />
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#337357]">
        <div className="max-w-[1200px] flex m-auto items-center p-2 justify-center md:justify-between text-[#e4e3d3]">
          <div className="">
            <a to="/" className="px-3 text-xl">
              News
            </a>
            <a to="/" className="px-3 text-xl">
              Result
            </a>
            <a to="/" className="px-3 text-xl">
              Fixture
            </a>
            <a to="/" className="px-3 text-xl">
              League
            </a>
          </div>
          <div className="hidden relative m-w-[250px] md:flex">
            <input
              type="text"
              className=" w-full bg-transparent px-3 py-1 border-none outline-[#e4e3d3] outline-[1px] rounded-[30px]"
              placeholder="search..."
            />
            <button className="px-2 hover:scale-110 absolute right-0 top-0 bottom-0">
              <AiOutlineSearch size={24} color="#e4e3d3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
