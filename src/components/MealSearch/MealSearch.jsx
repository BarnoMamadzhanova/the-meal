import React, { useEffect, useState } from "react";
import classes from "./MealSearch.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "../Form/Form";

function MealSearch() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchedMeals, setSearchedMeals] = useState([]);

  useEffect(() => {
    if (searchTitle) {
      const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTitle}`;
      axios({
        url: searchUrl,
      })
        .then((response) => {
          setSearchedMeals(response.data.meals);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchTitle]);

  return (
    <div className={classes.search_meal__container}>
      <Form setSearchTitle={setSearchTitle} />

      {searchedMeals
        ? searchedMeals.map((meal) => (
            <div className={classes.search_meal__flexbox}>
              <div className={classes.search_meal__img}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div key={meal.idMeal} className={classes.search_meal__info}>
                <h3>{meal.strMeal}</h3>
                <Link
                  className={classes.search_meal__info_link}
                  to={`/${meal.idMeal}`}
                >
                  {meal.strMeal}
                </Link>
                <div>
                  <span>{meal.strCategory}</span> | <span>{meal.strArea}</span>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default MealSearch;
