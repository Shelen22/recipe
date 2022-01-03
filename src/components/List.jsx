import React from 'react';
import { usestate } from "react";
// import("./List.css");
import  styled from "styled-components";

function List({data, setShow}) {
  
    const Showdata = (data) =>{
        setShow(data)
    }
    
    return (
        <div>
            <h2>List Of Recipe</h2>
            <RightSide>
            {data.map((recipe) =>(
                <div key = {recipe.id} onClick = {Showdata(data)}>
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
 overflow-y: scoll;
 display: flex;
 flex-direction: column;`

export default List
