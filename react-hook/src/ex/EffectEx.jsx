import React, { useEffect, useState } from "react";

/*
useState와 useEffect를 이용해서 카운트 다운 만들기

1. useState에  초기값을 설정하고 useEffect로 시간을 차감
2. useState의 값이 0이 되면 종료라는 텍스트를 화면에 출력하고 카운트 다운이 멈추도록 설정

*/

// export default function EffectEx() {
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prev) => prev - 1);
//     }, 1000);

//     if (count === 0) {
//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, []);

//   return (
//     <>
//       <p>{count}</p>
//       {count === 0 ? <p>종료</p> : null}
//     </>
//   );
// }

export default function EffectEx() {
  const [countNum, setCountNum] = useState(5);
  useEffect(() => {
    const countDown = () => {
      setCountNum((prev) => (prev > 0 ? prev - 1 : prev));
    };

    if (countNum > 0) {
      const timer = setInterval(countDown, 1000);
      return () => clearInterval(timer);
    }
  }, [countNum]);

  return (
    <>
      <p>{countNum}</p>
      {countNum === 0 ? <p>종료</p> : null}
    </>
  );
}
