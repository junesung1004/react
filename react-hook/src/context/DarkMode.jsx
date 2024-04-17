import React, { createContext, useState } from "react";
import DarkModeBtn from "./DarkModeBtn";

export const ThemaContext = createContext();

// 다크모드 만들기 (스타일 변경)
export default function DarkMode({ childern }) {
  const [thema, setThema] = useState("dark"); // 기본 세팅 값 설정

  const toggleThema = () => {
    setThema(thema === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemaContext.Provider value={{ thema, toggleThema }}>
        <DarkModeBtn />
      </ThemaContext.Provider>
    </>
  );
}
