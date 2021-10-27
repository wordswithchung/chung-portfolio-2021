import { Footer } from "./footer";
import { Header } from "./header";
import st from "./layout.module.css";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={st.mainLayout}>{props.children}</main>
      <Footer />
    </>
  );
};
