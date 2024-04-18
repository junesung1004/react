import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header>header wrapper</header>
      <main>{children}</main>
      <footer>footer wrapper</footer>
    </>
  );
}
