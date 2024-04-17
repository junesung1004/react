import React, { useContext } from "react";
import { ThemaContext } from "./ColorMode";

export default function ColorModeChild02() {
  const thema = useContext(ThemaContext);
  //useContext = Context로 전달된 데이터를 받아오는 hook
  //useContext는 개별적으로 행동할 수 없으며 반드시 Context에 받아온 값만 받아올 수 있다.
  return (
    <>
      <p>{thema}</p>
    </>
  );
}
