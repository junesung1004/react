import React, { createContext, useState } from "react";
import ColorModeChild from "./ColorModeChild";
import ColorModeChild02 from "./ColorModeChild02";

export const ThemaContext = createContext();
//createContext()는 전달할 데이터를 생성하는 메서드 ('내용의')기본값을 전달
//createContext를 담은 변수를 데이터를 공유받을 컴포넌트들을 랩핑해서 내부에 전달할 수 있다.
//(제외대상은) 밖에 작성
//context는 외부에서 참조되어야 함으로 밖에다 작성

export default function ColorMode() {
  const [thema, setThema] = useState("dark");

  return (
    <>
      <ThemaContext.Provider value={thema}>
        {/* Provier = context로 생성된 객체 안에 포함되는 컴포넌트
        value의 속성을 통해서 하위 컴포넌트로 데이터를 전달
        */}
        {/* <ColorModeChild /> */}
        {/* <ColorModeChild02 /> */}
        {/* {children} */}
      </ThemaContext.Provider>
    </>
  );
}
