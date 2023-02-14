import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

function Header() {
  return (
    <div className="bg-main-color py-8 fixed z-10 w-full">
      <div className="container mx-auto text-white flex justify-between">
        <div className="logo max-lg:w-1/12 max-md:w-2/12 w-1/12">
          <img
            className="w-full"
            src="https://metaflix.az/images/logo.png"
            alt=""
          />
        </div>
        <div className="nav-items w-4/12">
          <ul className="flex justify-around font-bold">
            <li className="text-main-yellow">HOME</li>
            <li>MOVIE</li>
            <li>TV SHOW</li>
            <li>PRICING</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="right-area flex">
          <div>
            <SearchIcon />
          </div>
          <div>
            <LanguageIcon />
          </div>
          <div className="max-md:hidden">
            <button className="bg-main-yellow">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
