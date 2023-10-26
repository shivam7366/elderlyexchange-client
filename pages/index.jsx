import Head from "next/head";
import Image from "next/image";
import React from "react";
import SnackBarAlert from "../src/components/UI/SnackBarAlert";
import ExperienceList from "../src/components/experience/ExperienceList";
import { useSelector } from "react-redux";

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
  const success = useSelector((state) => state.user.success);
  const error = useSelector((state) => state.user.error);
  React.useEffect(() => {
    if (success) {
      console.log(success, "from signin ");
      return (
        <SnackBarAlert
          opened={true}
          severity="success"
          message="Login Successfully"
        />
      );
    }
    if (error) {
      return (
        <SnackBarAlert
          opened={true}
          severity="error"
          message="Something Went Wrong"
        />
      );
    }
  }, [success, error]);
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
