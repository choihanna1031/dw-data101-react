import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="wrap">
      <p>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입혁하세요.
      </p>
      <input type="email" placeholder="이메일 주소" />
      <div className="start">
        <button>시작하기 {">"}</button>
      </div>
    </div>
  );
};

export default Input;
