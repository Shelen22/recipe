import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import List from "./components/List";
import { useState } from 'react';


function App() {
  const [recipedata , setRecipedata] = useState([]);
  const [data , setData] = useState([]);
  return (
    <div className="App">
       <AddRecipe 
       data = {data}
       setData = {setData}
       recipedata = {recipedata}
       setRecipedata = {setRecipedata}
/> 
  <List data = {data} />
    </div>
  );
}

export default App;
