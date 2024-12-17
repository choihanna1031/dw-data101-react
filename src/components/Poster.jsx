import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h3>지금 뜨는 콘텐츠</h3>
      <ul>
        {imgs.map((img, i) => {
          return (
            <li>
              <img src={img} alt="img2" />
              <p>영화제목</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Poster;

const img1 =
  "https://cdn.pixabay.com/photo/2024/02/02/11/22/mosque-8547944_640.jpg";
const img2 =
  "https://cdn.pixabay.com/photo/2023/02/08/15/03/woman-7776847_640.jpg";
const img3 =
  "https://cdn.pixabay.com/photo/2023/01/08/18/11/plants-7705865_1280.jpg";

const imgs = [img1, img2, img3];
