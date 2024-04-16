import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import State from "./State";
//import StateEx from "./StateEx";
import Props from "./props/Props";
import Props02 from "./props/Props02";
import State03 from "./state/State03";
import StateEx from "./ex/StateEx";
import Effect from "./effect/Effect";
import EffectEx from "./ex/EffectEx";
import Member from "./effect/Member";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>   --> 유효성 검사 코드 때문에 콘솔에 2번씩 찍힌다.
  //<StateEx />
  <>
    {/* <Props name="박준성" local="부평" job="취준생" age="34" /> */}
    {/* <Props02 name="박준성" local="부평1" job="취준생" age="34+1" /> */}
    {/* <State03 /> */}
    {/* <StateEx /> */}
    {/* <Effect /> */}
    {/* <EffectEx /> */}
    <Member />
  </>

  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
