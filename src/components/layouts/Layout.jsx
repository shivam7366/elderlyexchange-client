import React from "react";
import Navigation from "./Navigation";

export default function Layout(props) {
  return (
    <>
      <Navigation />
      <main className="container">{props.children}</main>
    </>
  );
}
