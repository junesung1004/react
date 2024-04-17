import React, { useEffect, useState } from "react";

/*
환율을 자동으로 업데이트 하는 컴포넌트
1. useState를 사용해서 기본 환율의 정보를 표시
2. useEffect를 사용해서 10초마다 환율 정보를 새로 갱신
3. 갱신된 환율의 정보는 실시간으로 화면에 출력되어야 한다.
4. 버튼을 추가해서 버튼을 누를경우 강제로 환율 정보를 업데이트 해야한다.
5. 버튼을 눌러서 강제로 업데이트 할 경우  자동 업데이트의 시간은 초기화 된다.
*/

export default function EventEx() {
  const initRate = {
    USD: 1.16,
    EUR: 1.3,
    GBP: 1.43,
  };

  console.log(Object.keys(initRate));
  //entries() 객체의 키와 값을 배열의 형태로 가져오기 위해서 사용하는 메서드

  const [rate, setRate] = useState(initRate);

  //자동으로 환율정보를 업데이트 할 함수
  const updateRate = () => {
    setRate({
      USD: generateRandomRate(initRate.USD),
      EUR: generateRandomRate(initRate.EUR),
      GBP: generateRandomRate(initRate.GBP),
    });
  };

  const [rateTimer, setRateTimer] = useState(null);
  // 버튼 업데이트 함수
  const updateRateBtn = () => {
    updateRate();
    resetTimer();
  };

  const resetTimer = () => {
    if (rateTimer) {
      clearInterval(rateTimer);
    }
    setRateTimer(setInterval(updateRate, 5000));
  };

  useEffect(() => {
    resetTimer();
    //const timer = setInterval(updateRate, 1000);
    return () => clearInterval(rateTimer);
  }, []);

  function generateRandomRate(value) {
    return (value + Math.random() * 0.1 - 0.05).toFixed(2);
  }

  return (
    <>
      <h1>실시간 환율 정보</h1>
      <ul>
        {Object.entries(rate).map(([currency, rate]) => (
          <li key={currency}>
            {currency} : {rate}
          </li>
        ))}
      </ul>
      <button onClick={updateRateBtn}>갱신</button>
    </>
    //entries() 객체의 키와 값을 배열의 형태로 가져오기 위해서 사용하는 메서드
  );
}
