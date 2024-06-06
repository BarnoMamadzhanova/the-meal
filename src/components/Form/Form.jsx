import React, { useState } from "react";

function Form({ setSearchTitle }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTitle(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Find your Meal</h5>
      <input
        type="search"
        placeholder="Find your meal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </form>
  );
}

export default Form;
