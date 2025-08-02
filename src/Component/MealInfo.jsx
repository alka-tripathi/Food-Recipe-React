import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MealInfo() {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const data = await res.json();
        setInfo(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error('Error fetching meal info:', error);
      }
    };

    getInfo();
  }, [mealid]);

  return (
    <div>
      {!info ? (
        <p>No data found or loading...</p>
      ) : (
        <div className="mealInfo">
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
          />
          <div className="info">
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
            <h3>Ingredients</h3>
          </div>
        </div>
      )}
    </div>
  );
}
