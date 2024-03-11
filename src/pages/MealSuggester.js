import React from "react";
import MealDiv from "../components/MealDiv";
import { useState } from 'react';
import './Mplanner.css';

const bfMeals =['Poha','Upma','Oats','Besan Chila','Sandwich','Pancakes'];
const lunMeals =['Puloa','Fried Rice','Noodles','Pasta','Quinoa'];
const dinMeals=['Puloa','Fried Rice','Noodles','Pasta','Quinoa','Burger'];


export default function MealSuggestor() {
  const [bfSugg,setBfSugg]=useState([]);
  const [lunSugg,setLunSugg]=useState([]);
  const [dinSugg,setDinSugg]=useState([]);

  function randomMeals(){
    let output=[];
    for (let i=0;i<5;i++){
      const newrand=Math.floor(Math.random()*bfMeals.length);
      if (!output.includes(newrand)){
        output.push(newrand);
      }
      else i--;
    }
    setBfSugg(output.map(key=>bfMeals[key]));

    output=[];
    for (let i=0;i<5;i++){
      const newrand=Math.floor(Math.random()*lunMeals.length);
      if (!output.includes(newrand)){
        output.push(newrand);
      }
      else i--;
    }
    setLunSugg(output.map(key=>lunMeals[key]));

    output=[];
    for (let i=0;i<5;i++){
      const newrand=Math.floor(Math.random()*dinMeals.length);
      if (!output.includes(newrand)){
        output.push(newrand);
      }
      else i--;
    }
    setDinSugg(output.map(key=>dinMeals[key]));
  }

  return (
    <div className="meal-suggestor-app">
      <header className="meal-suggestor-header">
        <p style={{textAlign:'center'}}>Get 5 random suggestions for each meal of the day</p>
      </header>
      <main>
      <button onClick={randomMeals} id='get-meals'>Get Suggestions</button>
        <MealDiv mealSugg={bfSugg} type='Breakfast'/>
        <MealDiv mealSugg={lunSugg} type='Lunch'/>
        <MealDiv mealSugg={dinSugg} type='Dinner'/>

    </main>
    <footer>
        <p>&copy; 2024 Rishabh Goel. All rights reserved. V1.1</p>
      </footer>
    </div>
  );
}
