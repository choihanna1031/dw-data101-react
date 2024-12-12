import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { BsGlobe2 } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <button className="netflix">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <button className="globe">
            <BsGlobe2 />
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
