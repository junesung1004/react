import React from "react";
import styled, { css } from "styled-components";

export default function StyledCom() {
  return (
    <>
      <Container className={"itme"}>
        {/* 컴포넌트 명과 클래스명은 */}
        <ButtonItem fontColor={"orange"}>버튼</ButtonItem>
        <ButtonItem>버튼</ButtonItem>
        <ButtonItem sub fontColor={"green"}>
          버튼
        </ButtonItem>
        <ButtonItem>버튼</ButtonItem>
        <ButtonItem fontColor={"blue"}>버튼</ButtonItem>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  background-color: lightgray;
  margin: 0px auto;
`;

const ButtonItem = styled.button`
  background-color: aqua;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  opacity: 0.5;
  transition: 500ms;
  color: ${(color) => color.fontColor};
  /*
  styled-components에는 컴포넌트에 전달된 props를 스타일 정의에 직접적으로 전달할 수 있다.
  $ { }구문은 자바스크립트 표현식에서 문자열 리터럴 안에 값을 넣어서 문자열에 포함한다.
  (props)=>props.fontColor는 현재 컴포넌트에 전달된 props객체에서 값을 전달받아 style에 
  적용하는 방식
  */
  ${(props) =>
    props.sub &&
    css`
      background: pink;
    `}
  /* 
css를 조건부로 넘겨줄때 css를 체크하는 메서드
css는 styled-component에서 css를 따로 import해야함
*/

  &:hover {
    //scss처럼 상속을 지원한다.
    opacity: 1;
  }
`;
