import React from 'react';
import { Link } from 'react-router-dom';

export default function MealCard({ details }) {
  console.log(details);

  return (
    <div className="meals">
      {!details
        ? ''
        : details.map((curItem,key) => {
            return (
              <div className="mealImg" key={key}>
                <img src={curItem.strMealThumb}></img>
                <p>{curItem.strMeal}</p>
                <Link to={`${curItem.idMeal}`}>
                  {' '}
                  <button>Recipe</button>
                </Link>
              </div>
            );
          })}
    </div>
  );
}
