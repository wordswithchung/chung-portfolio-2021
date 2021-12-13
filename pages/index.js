import Head from "next/head";
import { Layout } from "../components/layout";
import st from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chung Nguyen</title>
        <meta
          name="description"
          content="Chung Nguyen's Front End Dveloper Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={st.top}>
          <h1 className={st.heading}>
            Hi, my name is Chung! <br />I build things with JavaScript; <br />
            Based out of Lisbon.
          </h1>
          <div className={st.photo}>
            <img
              src="/chung_nguyen_profile_pic.png"
              alt="Chung Nguyen standing in front of computer"
            />
          </div>
        </section>
        <section className={st.about}>
          <h2 className={st.categoryHeader}>About Me</h2>
          <div className={st.content}>
            <p>
              Hello and welcome! My roundabout way into front end development:
            </p>

            <ul>
              <li>
                I have a B.A. in English from UC Berkeley #TeamOxfordComma
              </li>
              <li>
                I worked for about 13 years in various writing, customer
                support, and account management roles. I worked with a lot of
                different folks from different backgrounds. This helped me hone
                my communication and problem solving skills tremendously.
              </li>
              <li>
                In 2016 at the age of 35, I made a big career pivot. I quit my
                job and attended a three-month coding bootcamp (Hackbright
                Academy) where I learned Python and full-stack web development.
              </li>
              <li>
                Shortly afterward, I started at Bill.com as a software engineer.
                I was on the back end team (Java) and transitioned to the front
                end team (Angular, TypeScript). Source of tremendous pride: When
                I started, I was the only bootcamp grad at Bill.com. By the time
                I left, we had five other bootcamp grads from Hackbright alone.
              </li>
              <li>
                Since then, I've been working at PepsiCo on e-commerce solutions
                (React, NextJS, TypeScript).
              </li>
            </ul>
            <p>
              When I'm not writing code, I am playing fetch with Lola (our
              Doberman Pinscher), maintaining my Animal Crossing island, or
              enjoying a tasty meal with my spouse. Or, I'm sleeping. (It's
              always nice to be well-rested!)
            </p>
          </div>
        </section>
        {/* <section className={st.projects}>
          <h2 className={st.categoryHeader}>Projects</h2>
        </section> */}
      </Layout>
    </>
  );
}
