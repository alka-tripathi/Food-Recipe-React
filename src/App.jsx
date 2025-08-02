import { useState } from 'react';
import Main from './Component/Main';
import MealInfo from './Component/MealInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route
          path="/"
          element={<Main></Main>}
        ></Route>
        <Route
          path="/:mealid"
          element={<MealInfo></MealInfo>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
