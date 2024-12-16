import React from "react";
import "./Footer.css";
import LangButton from "./LangButton";

const Footer = () => {
  return (
    <footer>
      <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)</p>

      <ul>
        <li>
          <a href="">자주 묻는 질문</a>
        </li>
        <li>
          <a href="">고객센터</a>
        </li>
        <li>
          <a href="">계정</a>
        </li>
        <li>
          <a href="">미디어 센터</a>
        </li>
        <li>
          <a href="">투자 정보(IR)</a>
        </li>
        <li>
          <a href="">입사정보</a>
        </li>
        <li>
          <a href="">넷플릭스 지원 디바이스</a>
        </li>
        <li>
          <a href="">이용 약관</a>
        </li>
        <li>
          <a href="">개인정보 처리방침</a>
        </li>
        <li>
          <a href="">쿠키 설정</a>
        </li>
        <li>
          <a href="">회사 정보</a>
        </li>
        <li>
          <a href="">문의하기</a>
        </li>
        <li>
          <a href="">속도 테스트</a>
        </li>
        <li>
          <a href="">법적 고지</a>
        </li>
        <li>
          <a href="">오직 넷플릭스에서</a>
        </li>
      </ul>

      <div className="wrap">
        <LangButton />
      </div>

      <div className="txt">
        <p>넷플릭스 대한민국</p>
        <p>
          넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
          제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담) 대표:
          레지널드 숀 톰프슨 이메일 주소: korea@netflix.com 주소: 대한민국
          서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
          사업자등록번호: 165-87-00119 클라우드 호스팅: Amazon Web Services Inc.
          공정거래위원회 웹사이트
        </p>
      </div>
    </footer>
  );
};

export default Footer;
