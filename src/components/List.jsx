import React from 'react';
import { usestate } from "react";
// import("./List.css");
import  styled from "styled-components";

function List({data ,setShow}) {
  
    const Showdata = (recipe) =>{
        setShow(recipe)
    }
    
    return (
        <div>
            <h2>List Of Recipe</h2>
            <RightSide>
            {data.map((recipe) =>(
                <div key = {recipe.id} onClick = {Showdata(recipe)}>
                <p>Recipe Name :{recipe.name}</p>
                <p> Time :{recipe.time}</p>
                </div>
            ))}
            </RightSide>
        </div>
        
        
    )
}

const RightSide = styled.div`
 widht:700px;
 height : 200px;
 overflow-y: scoll;
 display: flex;
 flex-direction: column;`

export default List
