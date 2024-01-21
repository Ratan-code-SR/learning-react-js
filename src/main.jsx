import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

const todoTitle = "ToDo App";
const todoDescription = "totam dolorem sapiente iure sed eligendi veniam fugiat accusantium ducimus.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearNmae = date.getFullYear();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>{todoTitle}</h1>
    <p>{todoDescription}</p>
    <p>{`${dateName} ${monthName} ${yearNmae}`}</p>
  </div>

)
