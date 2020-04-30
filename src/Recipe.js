import React from "react";

const recipe = ({ title, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Ingredients:</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt=""></img>
      <p>Rating: </p>
    </div>
  );
};

export default recipe;
