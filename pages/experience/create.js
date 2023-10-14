import React from "react";

import ExperienceForm from "../../src/components/experience/ExperienceForm";

function create() {
  //this is an authinticated page write code for this here

  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  if (!isAuth) {
    return (
      <div className="container">
        <h1 className="mt-4">Share your Experience</h1>
        <p className="lead">You are not authorized to view this page</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="mt-4">Share your Experience</h1>
      <ExperienceForm />
    </>
  );
}

export default create;
