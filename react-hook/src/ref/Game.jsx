import React, { useEffect, useRef, useState } from "react";
import gameImg from "../game.png";

export default function Game() {
  /*
  가위 바위 보 게임
  조건은 내 점수와 pc의 점수를 비교

  조건

  -0점은 비기기
  -1점이 된 상대는 승리
  -점이 된 상대는 패배
  */

  const scoreSetting = {
    가위: 1,
    바위: 0,
    보: -1,
  };

  const gamePo = {
    바위: "-100px",
    가위: "-450px",
    보: "-800px",
  };

  const [result, setResult] = useState(""); //결과값 (승리, 비기기, 패배)
  const [score, setScore] = useState(0); // 기본점수
  const [imgPo, setImgPo] = useState(gamePo.바위);
  const [isPlay, setIsPlay] = useState(false);
  const intervalRef = useRef();

  const changeHand = () => {
    if (imgPo === gamePo.바위) {
      setImgPo(gamePo.가위);
    } else if (imgPo === gamePo.가위) {
      setImgPo(gamePo.보);
    } else {
      setImgPo(gamePo.바위);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [imgPo]);

  const onClickBtn = (choice) => () => {
    //함수 커링 function = () => () => {...}
    /*
    함수 커링
    리액트의 이베트 핸들러는 일반적으로 이벤트 객체를 자동으로 받는다.
    이벤트가 실행될때 추가적인 매개변수를 전달하려면 커링을 이용해서 구현해야 한다.
    onclick 이벤트가 실행될때마다 매개변수 choice에 따라서 다르게 동작하는 새로운 함수를 생성해야 한다.

    onClickBtn = (choice)=>{..} 로 하는 경우 onclick속성에 함수 할당되지 않고 
    컴포넌트가 랜더링 될때 <button onClick={onClickBtn("바위")}>바위</button>
    를 바로 호출되며 함수가 반환하는 값을 실행한다.
    */
    //console.log(choice);
    // if (intervalRef.current) {
    //   clearInterval(intervalRef.current);
    // }
    // console.log(intervalRef.current);
    if (isPlay) {
      return;
    } // 게임이 진행중이라면 즉시 종료
    setIsPlay(true); // 게임이 시작 상태로 변경
    clearInterval(intervalRef.current);

    const myScore = scoreSetting[choice];
    //console.log(myScore);

    const comScore = scoreSetting[getChoieCom(imgPo)];
    //console.log(comScore);

    const diffScore = myScore - comScore;
    //console.log(diffScore);

    //플레이어가 이기는 조건
    if (diffScore === 0) {
      setResult("비겼습니다. 다시 한번 더");
    } else if ([-1, 2].includes(diffScore)) {
      setResult("이겼습니다.");
      setScore((prev) => prev + 1);
    } else {
      setResult("졌습니다.");
      setScore((prev) => prev - 1);
    }
    /* 
    플레이어가 이길 수 있는 조건
    1. 가위는 보를 이길 수 있다. 2점 --> 1 -(-1)
    2. 바위는 가위를 이길 수 있다. -1
    
    */

    //게임이 끝난 후 일정 시간 이후 다시 게임 시작
    setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(changeHand, 100);
      setIsPlay(false);
    }, 3000);
  };

  //setInterval로 빠르게 이동하다가 멈추게 되는 시점의 imgPo에 전달되는 값을
  //gamePo의 값과 매치 시키는 작업

  const getChoieCom = (imgPo) => {
    return Object.keys(gamePo).find((key) => gamePo[key] === imgPo);
  };
  return (
    <>
      <div
        className="handImg"
        style={{
          width: "400px",
          height: "560px",
          background: `url(${gameImg}) ${imgPo} 0`,
        }}
      ></div>
      <button onClick={onClickBtn("가위")}>가위</button>
      <button onClick={onClickBtn("바위")}>바위</button>
      <button onClick={onClickBtn("보")}>보</button>
      <h1>{result}</h1>
      <h2>{score}</h2>
    </>
  );
}
