import React, { useEffect, useRef, useState } from "react";

/*
reference의 약자로 요소들을 렌더링 하지 않고 변경가능한 값을 제공하는 hook

1.dom요소에 직접적으로 접근하기 위한 목적
(리액트는 dom객체를 직접적으로 접근하는것을 금지)
-입력필드에 포커스를 주거나, 비디오 재생에 주로 사용


2. 값이 변경될 때에 랜더링 되지 않는 변경 가능한 값을 유지하기 위한 목적


useRef로 값을 초기화 후에 .current로 값이나 객체를 연결하는 방식으로 사용
.current는 변경 가능한 ref의 객체를 반환하며, 객체가 참조하는 값에 대한 
컨테이너 역할을 한다.

.current로 선택된 객체는 속성의 값이 변경되어도 이 변경이 리액트의 랜더링
사이클에 영향을 주지 않게 된다. 즉 값이 변경되어도 컴포넌트가 리랜더링 되지 않게 된다.

*/
export default function Ref() {
  //case01 객체에 직접적으로 접근
  const ref = useRef(); // 선택할 값을 넣기 전에 빈 값으로 초기화
  //console.log(ref); // undefined 초기화 했으므로 아무것도 선택되지 않은 상태

  //useEffect(() => {
  //ref.current.focus(); // 선택된 객체에 focus주기
  //console.log(ref);
  // });

  //case02 상태값 관리
  //useState버전
  // const [num, setNum] = useState(0);
  // console.log("랜더링 실행");
  // //useState는 값이 변경될때마다 리랜더링을 진행
  // const onCountNum = () => {
  //   setNum((prev) => prev + 1);
  // };

  //ref 버전
  const numRef = useRef(0);
  console.log("랜더링 실행");

  const onCountNum = () => {
    numRef.current += 1;
    console.log(`${numRef.current}`);
  };
  return (
    <>
      <input ref={ref}></input>
      {/* 초기화된 ref를 연결할 객체에 ref라는 속성을 주고 초기화된 ref의 변수를 입력 */}

      <button onClick={onCountNum}>+</button>
      {/* <p>{num}</p> */}
      <p>{numRef.current}</p>
    </>
  );
}
