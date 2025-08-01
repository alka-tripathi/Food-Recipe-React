import React from 'react';

export default function MealCard({ details }) {
  console.log(details);

  return <div className="meals">
    {!details ? "":<div></div>}

  </div>;
}
