import React,{use} from 'react';
import '../index.css';

import MealCard from './MealCard';

export default function Main() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  //handle input function

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsondata = await get.json();

    setData(jsondata.meals);
  };
  // console.log(data);
  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Dish"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={myFun}>Search</button>
        </div>
        <div>
          <MealCard details={data}></MealCard>
        </div>
      </div>
    </>
  );
}
