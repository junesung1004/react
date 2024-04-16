import { useState } from "react";
import ChildState from "../components/ChildState";

export default function State03() {
  const [name, setName] = useState("park");
  return (
    <>
      <ChildState name={name} />
      <button
        onClick={() => {
          setName("lee");
        }}
      >
        click
      </button>
    </>
  );
}

/*
props와 state의 차이

props
컴포넌트에서 자식 컴포넌트로 값을 전달하는 용도로 사용(반대는 불가능)
props는 읽기 전용으로만 사용되며, 값을 변경할 수 없다(에러 출력) = props의 출력
같은 컴포넌트에 다른 값을 출력해서 사용해야 하는 경우 state보다 간단하고 유연하게 사용할 수 있다.

state
컴포넌트 내부에서 상태를 관리할때 사용 
값이 바뀌는 경우 컴포넌트에 재 랜더링을 발생시켜서 값을 변경한다

값이 변경되어야 할때에는 state
단순하게 자식 컴포넌트가 부모 컴포넌트의 값을 참조만 하는 경우 props
*/
