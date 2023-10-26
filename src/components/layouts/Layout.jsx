import React from "react";
import Navigation from "../layouts/Navigation";
import { useSelector } from "react-redux";
export default function Layout(props) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <container>
      <Navigation isAuthenticated={isAuthenticated} />
      <main className="">{props.children}</main>
    </container>
  );
}
