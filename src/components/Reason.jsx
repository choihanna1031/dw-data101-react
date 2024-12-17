import React from "react";
import "./Reason.css";
import { MdAccessTime } from "react-icons/md";
import { MdAdb } from "react-icons/md";
import { MdAddBusiness } from "react-icons/md";
import { MdAnnouncement } from "react-icons/md";

const reasons = [
  {
    desc: "취향에 딱 맞는 이야기",
    Icon: MdAccessTime,
  },
  { desc: "언제든지 해지 또는 전환 가능한 멤버십", Icon: MdAdb },
  {
    desc: "아이들만을 위한 공간",
    Icon: MdAddBusiness,
  },
  {
    desc: "스마트폰,태블릿,노트북,TV에서 이용가능",
    Icon: MdAnnouncement,
  },
];
const Reason = () => {
  return (
    <div className="re">
      <h3>가입해야 하는 또 다른 이유</h3>
      <ul>
        {reasons.map((r, i) => {
          return (
            <li key={i}>
              <div>
                <p>{r.desc}</p>
                <r.Icon />
              </div>
            </li>
          );
        })}
        {/* <li>
          <div>
            <p></p>
            <MdAdb />
          </div>
        </li>
        <li>
          <div>
            <p></p>
            <MdAddBusiness />
          </div>
        </li>
        <li>
          <div>
            <p></p>
            <MdAnnouncement />
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Reason;
