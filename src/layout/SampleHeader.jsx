import React from "react";
import "./SampleHeader.css";
import { SiNetflix } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
import SampleLangbutton from "./SampleLangbutton";

const Header = () => {
  return (
    <header>
      <button className="netflix">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <SampleLangbutton />
        </li>
        <li>
          <button className="login">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default SampleHeader;
