import React from "react";
import "./FAQ.css";

const qs = [
  "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  "넷플릭스란 무엇인가요?",
  "넷플릭스 요금은 얼마인가요?",
  "어디에서 시청할 수 있나요?",
  "멤버십을 해지하려면 어떻게 하나요?",
  "아이들이 넷플릭스를 봐도 좋을까요?",
];

const nqs = [
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  },
  {
    q: "넷플릭스란 무엇인가요?",
  },
  {
    q: "넷플릭스 요금은 얼마인가요?",
  },
  {
    q: "어디에서 시청할 수 있나요?",
  },
  {
    q: "멤버십을 해지하려면 어떻게 하나요?",
  },
  {
    q: "아이들이 넷플릭스를 봐도 좋을까요?",
  },
];
const FAQ = () => {
  return (
    <div className="faq">
      <ul>
        {nqs.map((q, i) => {
          <li>
            return (
            <li key={i}>
              <button>
                {q.a}
                <span>+</span>
              </button>{" "}
            </li>
            {q.a && (
              <div>
                <p>{q.a}</p>
                <a href="">ㄱㄳ</a>
              </div>
            )}
            );
          </li>;
        })}
        <p className="qa">자주 묻는 질문</p>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요? <span>+</span>
          </button>
          <div>
            <p className="net">
              넷플릭스는 장편 영화,다큐멘터리,시리즈,애니메이션,각종 상을 수상한
              넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에
              드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.
            </p>
            <a href="">넷플릭스 콘텐츠를 한번 살펴보세요.</a>
          </div>
        </li>
        <li>
          <button>
            넷플릭스란 무엇인가요? <span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스 요금은 얼마인가요? <span>+</span>
          </button>
        </li>
        <li>
          <button>
            어디에서 시청할 수 있나요? <span>+</span>
          </button>
        </li>
        <li>
          <button>
            멤버십을 해지하려면 어떻게 하나요? <span>+</span>
          </button>
        </li>
        <li>
          <button>
            아이들이 넷플릭스를 봐도 좋을까요? <span>+</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
