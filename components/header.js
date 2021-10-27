import Link from "next/link";
import st from "./header.module.css";

export const Header = () => {
  return (
    <header className={st.header}>
      <a href="/">
        <img src="/chung_nguyen7.png" alt="Logo for Chung Nguyen" />
      </a>
      <span></span>
    </header>
  );
};
