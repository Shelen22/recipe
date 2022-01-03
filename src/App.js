import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import List from "./components/List";
import { useState } from 'react';
import  styled from "styled-components";


function App() {
  const [recipedata , setRecipedata] = useState([]);
  const [data , setData] = useState([]);
  const [show, setShow] = useState([]);
   return (
    <div className="App">
      <Display>

       <AddRecipe 
       data = {data}
       setData = {setData}
       recipedata = {recipedata}
       setRecipedata = {setRecipedata}/> 
  <List data = {data} setShow = {setShow} />
      </Display>
    </div>
  );
}
const Display = styled.div`
display : flex;`


export default App;
