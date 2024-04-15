import React, { useState } from "react";
/*
  useState
  값을 저장하거나 변경해야 하는 객체에 주로 사용하며, 이벤트 요소와 함께 사용할 수도 있다.
  컴포넌트에서 전달받아온 값을 state라고 한다.
  */

function State() {
  const [name, setName] = useState("아몰랑");
  console.log(name);
  console.log(setName);
  //react.stricMode 때문에 2번씩 출력되지만 오류는 아님
  //useState를 작성할때에는 2개의 매개변수를 작성한다.
  /*
  처음에 오는 값은 전달된 값이 들어올 매개변수이며, useState()에 들어올
  초기값을 의미, 두번째 변수는 상태를 업데이트 하는 매개변수이다. 
  보통 첫번째 변수명과 세트로 만들기 위해 이름을 통일하며 앞에 set이라는 이름을 추가한다.
  */

  return (
    <>
      <div>{name}</div>
      <button
        style={{
          color: "pink",
          padding: "20px",
          fontSize: "24px",
          borderRadius: "7px",
        }}
        onClick={() => {
          setName("박준성");
        }}
      >
        버튼을 누르면 값이 변경되는 useState hook
      </button>
    </>
  );
}

export default State;
//모듈 시스템으로 특정 값이나 객체를 외부 파일에서 가져올 수 있게(import) 하는 구문
