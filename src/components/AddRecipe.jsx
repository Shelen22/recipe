// api - https://foodish-api.herokuapp.com/api/
import React from 'react';
import { useState, useEffect } from 'react';
import  styled from "styled-components";
 
function AddRecipe({recipdata, setRecipedata, data , setData}) {
  const [form , setForm] = useState(null);
//   const [list , setList] = useState([]);

  const handleChange = (e) =>{
     const { name ,value } = e.target;

     setForm({
         ...form,
         [name] : value,
     });
  }
   useEffect(() =>{
       getData()
   }, []);

  const getData = () =>{
      fetch("http://localhost:3008/recipedata")
      .then((res) =>res.json())
      .then((res) =>{
         setRecipedata(res);
         setData(res);
      })
      
  }
  const addData = (e) =>{
      e.preventDefault();
      const payload = { 
          ...form,
      };

      fetch("http://localhost:3008/recipedata",{
          method : 'POST',
          body: JSON.stringify(payload),
          headers: {
              "content-type": "application/json"
          },
      });
      getData();
  }

    return (
        <div>
            <h1>Add your Recipe</h1>
            <Form onSubmit={addData}> 
            <input type="text" onChange = {handleChange} name = "name" placeholder = "Name of Recipe" />
            <br />
            <input type="text" onChange = {handleChange} name = "ingredients" placeholder = "Ingredients" />
             <br />
             <input type="time" onChange = {handleChange} name = "time" placeholder = "Time to Cook" />
             <br />
             <input type="url" onChange = {handleChange} name = "img" placeholder = "Image Link"/>
             <br />
             <input type="text" onChange = {handleChange} name = "Instruction" placeholder = "Instruction" />
             <br />
             <input type = "submit" value = "submit" />
            </Form>
            
        </div>
    )
}

const Form = styled.form`
justify-content : space-between;
align-items : center;
width: 400px;
margin: 10px;
input{
    margin : 5px;
}`


export default AddRecipe
