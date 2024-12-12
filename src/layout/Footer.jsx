import React from "react";
import "./Footer.css";
import { BsGlobe2 } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div>
        <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)</p>
      </div>
      <div>
        <ul>
          <li>
            <button>자주 묻는 질문</button>
          </li>
          <li>
            <button>고객 센터</button>
          </li>
          <li>
            <button>계정</button>
          </li>
          <li>
            <button>미디어 센터</button>
          </li>
          <li>
            <button>투자 정보(IR)</button>
          </li>
          <li>
            <button>입사정보</button>
          </li>
          <li>
            <button>넷플릭스 지원 디바이스</button>
          </li>
          <li>
            <button>이용 약관</button>
          </li>
          <li>
            <button>개인정보 처리방침</button>
          </li>
          <li>
            <button>쿠키 설정</button>
          </li>
          <li>
            <button>회사 정보</button>
          </li>
          <li>
            <button>문의하기</button>
          </li>
          <li>
            <button>속도 테스트</button>
          </li>
          <li>
            <button>법적 고지</button>
          </li>
          <li>
            <button>오직 넷플릭스에서</button>
          </li>
        </ul>
      </div>
      <div>
        <button>
          <BsGlobe2 />
          언어
        </button>
      </div>
      <div>
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
