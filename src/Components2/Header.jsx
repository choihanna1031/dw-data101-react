import React from "react";
import "./Header.css";
import { IoLanguage } from "react-icons/io5";
import { SiNetflix } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <button className="netflix">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <button className="lang">
            <IoLanguage />
            언어
          </button>
        </li>
        <li>
          <button className="login">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
