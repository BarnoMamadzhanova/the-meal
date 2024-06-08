import React, { useState } from "react";
import classes from "./Form.module.css";

function Form({ setSearchTitle }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTitle(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.search_form}>
      <h3>Find your Meal</h3>
      <div className={classes.search_form__flexbox}>
        <input
          type="search"
          placeholder="Find your meal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={classes.search_form__input}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className={classes.search_form__btn}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
