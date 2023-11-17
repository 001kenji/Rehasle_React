import { data } from "autoprefixer";
import React,{memo, useMemo, useState} from "react";
import '../App.css'
export default memo(MyMemo) 
function MyMemo(){

const [clicked, setClicked] = useState(true)
const [database, setDatabase] = useState([])
const [hide, setHide] = useState(false)
const Mydata = useMemo(() => {

    console.log('Fetching....')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setDatabase(data))
    var DatabaseDiv = document.getElementById('DatabaseDiv')
    console.log(database)


},[clicked])

var databaseMapper = database.map((details) => 
    <div id="myDatabaseDiv">
        <p id="userId">User Id : {details.userId}</p>
        <p id="title">Title : {details.title}</p>
        <p id='body'>Body : {details.body}</p>
    </div>
)
var styler = {
    display : hide ? 'none' : 'grid'
}

    return (
        <>
        <blockquote id="info">It is useful when your running a bulky data so as to prevent it from re-created again, saving on the reloding time and improving performance</blockquote>
        <div>
            <button id="hide" onClick={() => setHide(true)}>Hide</button>
            <button id="show" onClick={() => setHide(false)}>Show</button>
        <p style={styler} id="DatabaseDiv">{databaseMapper}</p>
        <button id="fetchBtn" onClick={() => setClicked((e) => !e)}>Fetch Database</button>
        
        
        </div>
        </>
    )
}