import React from "react";

export default function MealDiv(props) {
  return (
    <div className="meal-div">
      <p style={{marginBottom:-10}}><strong>{props.type}:</strong></p>
      <ul>
        {props.mealSugg.map(key=> (<li key={key}>{key}</li>))}
      </ul>
    </div>
  );
  }
