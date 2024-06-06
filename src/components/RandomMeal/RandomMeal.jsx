import React, { useEffect, useState } from "react";
import classes from "./RandomMeal.module.css";
import axios from "axios";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

function RandomMeal() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios({
      url: url,
    })
      .then((response) => {
        console.log(response.data);
        setMeal(response.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.random_meal__flexbox}>
      {meal ? (
        <>
          <div className={classes.random_meal__info}>
            <h3>Meal of the Day</h3>
            <h2>{meal.strMeal}</h2>
            <div>
              <span> {meal.strCategory}</span> | <span>{meal.strArea}</span>
            </div>
          </div>
          <div className={classes.random_meal__img}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomMeal;
