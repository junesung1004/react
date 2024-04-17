import React, { useEffect, useState } from "react";

export default function Member() {
  const [item, setItem] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    //비동기 방식 데이터를 처리하는 메서드
    fetch(`data/${check ? "" : "no-"}member.json`)
      //fetch 비동기 방식으로 데이터를 호출하는 함수
      .then((res) => res.json()) //then 이란 fetch 요청에 의해 데이터가 성공적으로 받아왔을때 실행되는 함수
      //호출에 성공하면 응답받은 파일을 .json() 함수를 통해 json형식으로 파싱
      //파싱 = 데이터를 분석
      //res = response 응답
      .then(
        (data) => {
          {
            setItem(data);
          }
          //fetch로 받아온 데이터는 기본적으로 문자열 형태로 저장하기 때문에 .then((res)=>res.json())
          //json형시그로 저장하는 과정을 한번 거친다.
          //console.log(item);
        },
        [check]
      );

    //.catch 란 fetch로 데이터를 받아오지 못했을때(오류 처리)
  });

  const onCheckEvent = () => {
    setCheck((prev) => !prev);
  };
  return (
    <>
      <input type="checkbox" onChange={onCheckEvent} />
      비회원 체크
      <ul>
        {item.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
            <p>{el.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
