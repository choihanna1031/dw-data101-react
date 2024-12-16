import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="wrap">
        <img src={img} />
        <button className="left">{"<"}</button>
        <button className="right">{">"}</button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_640.jpg";
