import React, { useState } from "react";

/*
리액트에서 이벤트 처리 사항
1. 이벤트의 이름은 카멜기법으로 작성
onclick => x
onClick -> o

2. 이벤트 전달
이벤트 핸들러로 이벤트를 전달할때에는 함수형태로 전달 하거나 즉시 실행으로 한다.
이벤트를 발생시키는 코드 
onClick = {eventFn()}  => x 클릭시 발생이 되어야 하는데 ()를 쓰면 누르기도 전에 실행이 되어버린다.
onClick = {event} => o

3. 기본 이벤트 제거
리액트에서는 요소의 기본 이벤트를 막기 위해 return false를 사용할 수 없다.
기본 이벤트를 막을때 event.preventDefault()만 사용할 수 있다.

이벤트 종류
-클릭 이벤트
onClick : 클릭 이벤트

-폼 이벤트
onChange : 입력요소 안에서 값이 변경될 때 input, textarea, select
onSubmit : 사용자가 폼안에 있는 내용을 서버에 전달하는 이벤트

-포커스 이벤트
onFocus : 요소에 포커스가 되었을때 이벤트
onBlur : 요소에 포커스가 아웃되었을때 이벤트

-마우스 이벤트
onMouseMove : 요소 내에서 마우스가 움직이는 이벤트(over 이벤트 아님)
onMouseEnter : 마우스 over 이벤트
onMouseLeave : 마우스 out 이벤트

-키보드 이벤트 
onKeyDown : 키룰 누를때 발생
onKeyUp : 키를 눌렀다가 뗄 때 발생
onKeyPress : 키를 누르고 있는 상태에서 발생

*/

export default function Event() {
  const [inputValue, setInputValue] = useState("");
  const [isFoucs, setIsFoucs] = useState(false);
  const [text, setText] = useState("마우스가 영역 밖으로 나갔습니다.");

  //클릭 이벤트
  const handleClick = (e) => {
    setInputValue(e.target.value);
    console.log("클릭 이벤트 실행", inputValue);
  };

  //변경 이벤트
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  //폼 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`제출 내용 : ${inputValue}`);
  };

  //포커스 이벤트
  const handleFocus = () => {
    setIsFoucs(true);
  };

  //v포커스 아웃 이벤트
  const handleBlur = () => {
    setIsFoucs(false);
  };

  //마우스 이벤트
  const handleMouseMove = (e) => {
    console.log(`X : ${e.clientX}, Y : ${e.clientY}`);
  };

  const handleMouseEnter = () => {
    setText("마우스가 영역으로 들어왔습니다.");
  };

  const handleMouseLeave = () => {
    setText("마우스가 영역 밖으로 나갔습니다.");
  };

  return (
    <>
      <button onClick={handleClick}>클릭 이벤트</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <input type="submit" value="제출" />
      </form>
      {isFoucs && <p>포커스 이벤트가 실행되었습니다.</p>}
      <div
        onMouseMove={handleMouseMove}
        style={{ padding: "50px 100px", backgroundColor: "gray" }}
      >
        마우스 이벤트 영역
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "300px",
          height: "100px",
          border: "1px solid black",
          padding: "50px 100px",
          backgroundColor: "aqua",
        }}
      >
        {text}
      </div>
    </>
  );
}
