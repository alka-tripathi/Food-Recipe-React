import React, { useState } from 'react';
import '../index.css';

import MealCard from './MealCard';

export default function Main() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  //handle input function

  const myFun = async () => {
    if (search == '') {
      setMsg('Please Enter First the Food Name !!');
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsondata = await get.json();

      setData(jsondata.meals);
    }
  };
  console.log(data);

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
          color: 'orange',
        }}
        className="head"
      >
        FOOD RECIPE APP
      </h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Dish"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={myFun}>Search</button>
        </div>
        <h3 style={{ textAlign: 'center', color: 'red' }}>{msg}</h3>
        <div>
          <MealCard details={data}></MealCard>
        </div>
      </div>
    </>
  );
}
