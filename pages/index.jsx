import Head from "next/head";
import Image from "next/image";

import ExperienceList from "../src/components/experience/ExperienceList";

const DUMMY_EXPERIENCES = [
  {
    id: "e1",
    role: "Max",
    Company: "Google",
    heading: "Learn React",
    description: "Learning React is fun!",
  },
  {
    id: "e2",
    role: "Maximilian",
    Company: "Microsoft",
    heading: "Learn Great React",
    description: "Learning React is great!",
  },
];

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>ElderlyExchange</title>
        <meta name="ElderlyExchange" content="ElderlyExchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h1>ElderlyExchange</h1>
        <ExperienceList experiences={props.experiences} />
      </>
      <footer></footer>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      experiences: DUMMY_EXPERIENCES,
    },
  };
}
