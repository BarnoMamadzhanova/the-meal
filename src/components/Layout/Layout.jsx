import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

function Layout() {
  return (
    <>
      <Header />
      <main className={classes.main__container}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
