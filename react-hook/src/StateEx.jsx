import React, { useState } from "react";

export default function StateEx() {
  /*
  초기값을 2로 설정
  버튼을 클릭할때마다 현재값에 2를 곱하도록 설정
  */

  const [num, setNum] = useState(2);

  const onCountClick = () => {
    setNum(num * 2);
  };

  return (
    <>
      <p>{num}</p>
      <button onClick={onCountClick}>Click !</button>
    </>
  );
}
