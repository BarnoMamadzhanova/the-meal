import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/" className={classes.header__link}>
          Home
        </Link>
        <Link to="/details" className={classes.header__link}>
          Details
        </Link>
      </header>
    </>
  );
}

export default Header;
