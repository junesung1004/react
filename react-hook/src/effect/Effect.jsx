import React, { useEffect, useState } from "react";

export default function Effect() {
  /*
  useEffect()
  페이지가 랜더링 될때 특정 작업을 실행하는 hook
  페이지가 랜더링 된다는 의미
  -컴포넌트가 처음 나타났을때 (마운트)
  -컴포넌트가 사라졌을때 (언마운트)
  -값이 업데이트 되어서 리랜더링 되는 경우(props, state)

  useEffect(()=> {
    실행되는 코드값
    return ()=>{리턴 실행 코드}
  }, 특정 배열값)
  effect의 구동 방식은 특정한 값이 변경(마운트, 언마운트, 리랜더링)되면 값을 담아서
  변경해주는 방식 - 배열에 특정 값을 넣게 되면 그 값이 변경될 때에만 작동

  1. 배열값을 생략할 경우 = 모든 값이 변경될때마다 실행(기본값)
  2. 빈 배열[]만 넣는 경우 - 최초 마운트시에만 실행
  3. 특정한 값을 넣은 배열 [값] - 해당하는 값이 바뀔때에만 실행
  4. return문은 필수는 아면 생략 가능 (선택적 구문)
  -효과가 재실행되기 전이나, 마운트가 해제되려고 할 때 실행되는 구문
  -이벤트 제거, clearTimeout 제거용
  */

  const [num, setNum] = useState(2);
  const [count, setCount] = useState(10);
  const [timeCount, setTimeCount] = useState(0);

  const numPlus = () => {
    setNum(num * 2);
  };

  const countPlus = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(num);
  }, [num]);

  useEffect(() => {
    const timer = setInterval(() => {
      //setTimeCount(timeCount + 1)
      setTimeCount((prev) => prev + 1);
      /*
      setTimeCount(timeCount + 1)
      위 코드는 실행되는 시점의 timeCount값에 의존한다
      useEffect에 []을 넣어 마운트가 실행되는 순간만 실행을 했기 때문에 
      항상 초기값을 참조하기 때문에 0을 기준으로 하게 된다.

      setTimeCount((prev) => prev + 1);
      setTimeCount에 prev를 인자로 전달한다. 이 함수는 현재 timeCount의 값을
      파라미터로 받고 이 값을 기반으로 다음 상태의 값을 계산한다.
      setTimeCount는 최산 timeCount의 상태값을 받아와 이를 기반으로 상태를 업데이트 한다.

      리액트에서 상태 업데이트를 할 때 특히 비동기적인 작업이나 인터벌, 타임아웃과
      같은 작업을 할때에는 상태가 최신의 값을 반영하도록 함수형 업데이트를 사용하는것이 안전하다.


      */
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>{num}</p>
      <p>{count}</p>
      <p>{timeCount}</p>
      <button onClick={numPlus}>클릭</button>
      <button onClick={countPlus}>클릭!</button>
    </>
  );
}
