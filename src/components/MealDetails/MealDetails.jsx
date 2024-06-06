import React from "react";
import { useParams } from "react-router-dom";

function MealDetails() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default MealDetails;
