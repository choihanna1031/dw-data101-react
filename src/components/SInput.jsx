import React from "react";
import "./SInput.css";

const SInput = () => {
  return (
    <div className="wrap">
      <p>
        시청할 준비가 되셨나요?멤버십을 등록하거난 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <input type="text" placeholder="이메일 주소" />
      <div className="start">
        <button className="btn">시작하기{">"}</button>
      </div>
    </div>
  );
};

export default SInput;
