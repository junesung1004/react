import React from "react";
import "./BasicCss.css"; // 외부에서 작성된 css파일을 import해서 작성하는 방식
import Button from "../components/Button";
import Button02 from "../components/Button02";

export default function BasicCss() {
  const text = {
    color: "coral",
    fontSize: "30px",
  };
  return (
    <div className="container">
      <h1 className="title">리액트 기본 css 작성 방식</h1>
      <p style={{ fontSize: "40px", backgroundColor: "coral" }}>
        태그에 직접 장성하는 인라인 스타일 방식
      </p>
      <p style={text}>변수로 선언해서 객체로 전달하는 방식</p>
      <Button />
      <Button02 />
    </div>
  );
}
