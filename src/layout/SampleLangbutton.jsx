import React from "react";
import { IoLanguage } from "react-icons/io5";
import "./SampleLangbutton.css";

const SampleLangbutton = () => {
  return (
    <div>
      <button className="Lang">
        <IoLanguage />
        언어
      </button>
    </div>
  );
};

export default SampleLangbutton;
