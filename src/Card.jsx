// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

const todoHeading = "Welcome To";
const todoTitle = " our family";
const todoDescription = "totam dolorem sapiente iure sed eligendi veniam fugiat accusantium ducimus.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearNmae = date.getFullYear();


//create component 
function Card() {
    return <div className='card'>
        <h1 className='totdoHeading'>{todoHeading} </h1>
        <h3 className='todoTitle'>{todoTitle}</h3>
        <p className='todoDescription'>{todoDescription}</p>
        <p className='date'>{`${dateName} ${monthName} ${yearNmae}`}</p>
    </div>
}

export default Card;
