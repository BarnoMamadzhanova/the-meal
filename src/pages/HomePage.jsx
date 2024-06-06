import React from "react";
import RandomMeal from "../components/RandomMeal/RandomMeal";
import MealSearch from "../components/MealSearch/MealSearch";

function HomePage() {
  return (
    <div>
      <RandomMeal />
      <MealSearch />
    </div>
  );
}

export default HomePage;
