import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./MealDetails.module.css";

function MealDetails() {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [meal, setMeal] = useState(null);

  // Fetching data
  useEffect(() => {
    axios({
      url: url,
    })
      .then((response) => {
        setMeal(response.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Function to get ingredients and measures
  const getIngredients = (meal) => {
    const ingredients = [];
    Array.from({ length: 20 }, (_, i) => i + 1).forEach((i) => {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    });
    return ingredients;
  };

  // Function to format instructions into a list
  const formatInstructions = (instructions) => {
    return instructions.split("\r\n").filter((instruction) => instruction);
  };

  return (
    <div className={classes.meal_details}>
      {meal ? (
        <>
          <div className={classes.meal_details__info_container}>
            <div className={classes.meal_details__info}>
              <h2>{meal.strMeal}</h2>
              <div className={classes.meal_details__meta}>
                <span>{meal.strCategory}</span> | <span>{meal.strArea}</span>
              </div>
              <div className={classes.ingredients}>
                <h5>Ingredients</h5>
                <ul>
                  {getIngredients(meal).map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.meal_details__img}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          </div>

          <div className={classes.instructions}>
            <h3>Instructions</h3>
            <ul>
              {formatInstructions(meal.strInstructions).map(
                (instruction, index) => (
                  <li key={index}>{instruction}</li>
                )
              )}
            </ul>
          </div>

          {meal.strYoutube && (
            <div className={classes.btns}>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.youtube_button}>
                  Watch on YouTube
                </button>
              </a>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MealDetails;
