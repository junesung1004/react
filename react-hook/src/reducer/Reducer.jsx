import React, { useReducer, useState } from "react";

/*
useReducer()
useState의 상위 버전
복잡한 상태 로직을 관리할때 state보다 더 관리의 용이성이 좋은 hook

state의 경우 상태 로직이 간단한 경우 유용하지만
현재 상태가 이전상태에 의존도가 더 커지고, 복잡한 구조로 이루어져 있을수록
reducer가 더 적합하다.

둘 다 상태값을 관리하는 hook이지만 구조나 상태에 따라서 적절한 사용을 권장

프로젝트의 규모가 커질수록 상태관리 추적하기 복잡해지고 디버깅하기 어려워진다.
-상태 변화 로직을 하나로 합쳐 관리할 수 있게 해준다.

주로 reducer에서는 switch문을 자주 사용한다.
여러 액션의 유형을 간단하게 정리해서 처리할 수 있게 해주기 때문이다.
코드 가독성 관리측면에서 if문보다 편리하다.
*/

export default function Reducer() {
  //카운트 관리 useState 버전
  const [count, setCount] = useState(0);
  const counttPlus = () => {
    setCount((prev) => prev + 1);
  };
  const countMinus = () => {
    setCount((prev) => prev - 1);
  };

  ///////////////////////////////////////////////////

  //카운트 관리 useReducer 버전
  /*
  useReducer 명령어
  state = 상태값을 가진 변수
  dispatch = 상태값을 변경하기 위해 일어날 이벤트

  */
  const init = { count: 0 }; // 초기값을 설정 객체 형식으로 전달하기 때문에 여러개의 값이 들어올수도 있음
  const reducer = (state, action) => {
    switch (action.type) {
      case "countPlus":
        return { count: state.count + 1 };
      case "countMinus":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={counttPlus}>+</button>
      <button onClick={countMinus}>-</button> */}

      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "countPlus" })}>+</button>
      <button onClick={() => dispatch({ type: "countMinus" })}>-</button>
    </>
  );
}
