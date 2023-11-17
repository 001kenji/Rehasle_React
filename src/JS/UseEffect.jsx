import { parse } from "postcss";
import React, { useEffect, useState } from "react";

export default MyEffect
function MyEffect(){
const [data, setData] = useState()
const [fetchIt, setIt] = useState(true)
const [num, setNum] = useState(0)
console.log('hey')

function Getdata(){
    setIt((prev) => !prev)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
        setData(data)
    document.getElementById('effect').innerHTML = 
   `<div id='effectDiv'>
    <p>UserId : ${data.userId}</p>
    <p>Work Status : ${data.completed}</p>
    <p>Worker Id : ${data.id}</p>
    <p>Worker Details : ${data.title}</p>
   </div>`
    })


   
}
//  useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => {
//         setData(data)
//     document.getElementById('effect').innerHTML = 
//    `<div id='effectDiv'>
//     <p>UserId : ${data.userId}</p>
//     <p>Work Status : ${data.completed}</p>
//     <p>Worker Id : ${data.id}</p>
//     <p>Worker Details : ${data.title}</p>
//    </div>`
//     })



// },[fetchIt])

    return(
        <>
        <div id="effect"></div>
        <div id="effectDivBtn">
        <button id="effectBtn" onClick={Getdata}>Get Remote Data</button>
        </div>
        </>
    )
}