import React, { useState } from "react";

export default function StateEx() {
  /*
  1. state의 초기값은 = 0
  2. 사용자가 버튼을 클릭할때마다 +1씩 카운터
  3. 카운터가 10이 되면 특정 문자를 출력 '카운트가 10이 되었습니다.' 텍스트를 하나 출력
  */

  const [count, setCount] = useState(0);
  const maxCount = 10;

  const clickCountPlus = (e) => {
    setCount(count + 1);
    // if (count === 9) {
    //   //console.log("카운트가 10이 되었습니다.");
    //   document.write("카운트가 10이 되었습니다.");
    // }
  };
  return (
    <>
      <p>카운트 : {count}</p>
      <button
        onClick={() => {
          clickCountPlus();
        }}
      >
        Click +
      </button>
      {count === maxCount ? <p>카운트가 10이 되었습니다.</p> : null}
    </>
  );
}
