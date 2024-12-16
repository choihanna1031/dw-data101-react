import React from "react";
import "./Gallery.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Gallery = () => {
  return (
    <div className="gal">
      <div className="wrap">
        <img src={img} />
        <button className="l">
          <IoChevronBackOutline />
        </button>
        <button className="r">
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://cdn.pixabay.com/photo/2014/11/21/18/25/christmas-market-540918_640.jpg";
