import React from "react";
import "./Gal.css";

const Gal = () => {
  return (
    <div id="gal">
      <div className="wrap">
        <img src={img} />
        <button className="chev l">{"<"}</button>
        <button className="chev r">{">"}</button>
        <div className="txts">
          <h1>트렁크</h1>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};
import "./Gal.css";

export default Gal;

const img =
  "https://cdn.pixabay.com/photo/2018/05/04/15/27/cabin-3374201_640.jpg";
