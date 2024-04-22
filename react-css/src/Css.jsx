import React from "react";
/*
리액트 특징
-리액트는 파일이 페이지 단위가 아닌 컴포넌트 단위로 쪼개져 있다.
-컴포넌트마다 하나의 css 파일을 생성해서 관리하는 방법을 주로 사용한다
-기존의 사용하는 bem(block, element, modifier)방식을 잘 사용하지 않는다
(리액트에서는 컴포넌트 별로 scoping이 되지 않기 때문에 bem 방식보다는 팀이나 회사내부에서
규칙을 정해서 사용하는 방식을 더 많이 사용)

리액트 사용하는 css 기법 종류
1.basic css
-가장 기본적으로 사용하는 내장형 css기법
선택자를 이용하거나 컴포넌트-클래스 명을 활용해서 네이밍(개발자마다 조금씩 다름)

단점 : 
-컴포넌트마다 css 파일을 생성해야 하기 때문에 파일의 갯수가 많아짐
-import의 남용
-일관된 패턴을 가지기 어려움

2. css module
css의 발전된 형태로 일반 css와 구별하기 위해 파일명에 파일명.module을 붙여서 사용
ex)style.module.css
-클래스명 충돌 방지
-컴포넌트 단위의 스타일을 적용할때 같은 클래스명을 사용하면서 컴포넌트 단위로 다른값이 
필요할때 사용

-module을 사용하게 되면 클래스명 뒤에 고유의 값이 랜덤으로 부여되는 방식으로 실수로 클래스 
이름이 다른 곳에서 사용한 클래스명과 중복되어서 사용되는 일이 없어짐

-보통 처음부터 module방식을 도입하지는 않지만 보통적으로 프로젝트 진행중에 수정하거나
추가로 인해서 className을 추가해야 하는 경우 사용되지 않도록 할때

-혹은 클래스명이 중복되지 않도록 네이밍 규칙을 유지하기 싫을때도 사용
규칙 :
-다른 컴포넌트명이랑 죽복되지 않기
-컴포넌트 최상단 class명은 컴포넌트 명과 일치시키기

3. sass / scss
sass/scss는 내장 스타일이 아니기 때문에 별도의 설치가 필요
yarn add sass / yarn add node-sass (둘 중 하나)로 설치

- 변수 / 함수 / 상속 개념을 활용해서 재사용을 극대화
- 별도의 전처리 과정이 필요
- 컴파일 되는 파일의 크기가 일반 css보다 커짐(용량) - 계층구조생성

4. styled-components
-컴포넌트 중심으로 개발되는 특성상 캡슐화로 만듬(css-in-cs)
-리액트에서 컴포넌트 기반 환경에 스타일링을 위해서 만들어진 언어이기 때문에 편리한 기능의
sass방식의 스타일링을 지원한다.

사용법
yarn add styled-components 

-className이 중복될 염려가 없음
-className 대신에 변수로 작성되며, 그 변수는 사용된 컴포넌트를 찾아서 고유의 클래스로 변환
클래스명 오타나 중복으로 인한 오류를 아예 없앰

-관리가 편함
컴포넌트 내부에서 변수를 찾아서 해결하기 때문에 여러개의 파일을 넘어갈 필요가 없음

-직관적
className을 일일이 관리하지 않고 props나 전역속성으로 컴포넌트에 스타일을 적용하기 때문에
일반 css기법보다 직관적이고 간단

단점 :
컴포넌트 내부에 작성되어 하나의 파일로 관리되기 때문에 컴포넌트 자체가 무거워서 초기 로드가 느린 단점이 있다.
리액트에 안좋다.

5.tailWind 라이브러리
워드프레스 처럼 별도의 css파일을 작성해서 관리하지 않고 적용할 css가 적용된 클래스명을
찾아서 적용하는 방식

장점 :
-코드 자체를 깨끗하게 사용할 수 있다.

단점 : 
-클래스명을 직접 찾아서 작성해야 하기 때문에 초반 난이도가 다른 css방식에 비해 조금 있는 편

사용법
yarn add -D pakage = 패키지 설치
yarn tailwind init -p = tailwind config파일을 생성

글로벌 css나 최상위 css파일에 (보통 index.css)
@tailwind base;
@tailwind components;
@tailwind utilities;

import 하기
*/
export default function Css() {
  return <div>Css</div>;
}