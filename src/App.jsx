// // import React from "react";
// // import Header from "./layout/Header";
// // import Footer from "./layout/Footer";
// // import LangButton from "./layout/LangButton";
// // import Gallery from "./components/Gallery";
// // import Auth from "./components/Auth";

// // const App = () => {
// //   return (
// //     <>
// //       <Header />
// //       <main>
// //         <Gallery />
// //         <Auth />
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // };

// export default App;
import React from "react";
// import SampleHeader from "./layout/SampleHeader";
import Gal from "./components/Gal";
import SInput from "./components/SInput";
import NInput from "./components/NInput";
import Header from "./layout/Header";
import MQ from "./ex/MQ";
import Grid from "./ex/Grid";
import Cal from "./ex/Cal";
import Detail from "./components/Detail";
import Poster from "./components/Poster";
import Reason from "./components/Reason";
import FAQ from "./components/FAQ";
import LB from "./components/LB";

const App = () => {
  // 변수 선언 너는 너야.

  // const => 변함없이 계속해서 끝까지 똑같은.
  // let => 변경가능

  const App = () => {
    const a = 135742;
    const b = 264975;

    // a + b를 계산해줘 공식
    //함수
    function add(n1, n2) {
      return n1 + n2;
    }

    const mul = (n1, n2) => {
      return n1 * n2;
    };

    console.log(add(545453, 6547547));
  };

  return (
    <>
      {/* <SampleHeader /> */}
      <Header />
      <main>
        <Gal />
        <NInput />
        <Detail />
        {/* <SInput /> */}
        {/* <MQ /> */}
        {/* <Grid /> */}
        {/* <Cal /> */}
        <Poster />
        <Reason />
        <FAQ />
        <LB />
      </main>
    </>
  );
};

export default App;
// import React from "react";
// import Calendar from "./Components2/Calendar";
// import Detail from "./Components2/Detail";
// import Gallery from "./Components2/Gallery";
// import Header from "./Components2/Header";
// import Input from "./Components2/Input";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <main>
//         <Gallery />
//         <Calendar />
//         <Detail />
//         <Input />
//       </main>
//     </>
//   );
// };

// export default App;
