import React, { useContext } from "react";
import { ThemaContext } from "./DarkMode";

export default function DarkModeBtn() {
  const { thema, toggleThema } = useContext(ThemaContext);

  const darkMode = {
    backgroundColor: thema === "light" ? "white" : "black",
    color: thema === "light" ? "black" : "white",
  };

  return (
    <>
      <div style={darkMode}>
        <h1>컬러모드</h1>
        <button
          onClick={toggleThema}
          style={{
            backgroundColor: thema === "light" ? "black" : "white",
            color: "gray",
          }}
        >
          {thema === "light" ? "dark" : "light"}
        </button>
      </div>
    </>
  );
}
