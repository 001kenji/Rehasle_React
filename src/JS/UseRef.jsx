import React from "react";
import { useState } from "react";
import "../App.css";
export default function MyRef(){
    const [data,setdata] = useState({
        name : '',
        age : '',
        gender : '',
        social : '',
        message : '',
        email : '',
        profile : ''
    })
const choiceStyler = {
    backgroundColor : 'transparent',
    color : 'black',
    border : '0px'
}

function Changes(event){
const {name, value, type} = event.target
 
    setdata((prev) => {
        return{
            ...prev,
            [name] :   value
        }
    }
    )
    
  
   
}
function Mypic(event){
    var imageDisplay = document.getElementById('imageDisplay')
    var pic = document.getElementById('picUrl').files[0]
    if (pic) {
        // Create a FileReader object
        const reader = new FileReader();
    
        // Set the onload event handler
        reader.onload = function(e) {
          // Set the source of the image element to the data URL
          imageDisplay.src = e.target.result;
          data.profile = e.target.result;
        };
    
        // Read the selected file as a data URL
        reader.readAsDataURL(pic);
     
      }
}
function GenProfile(event) {
    event.preventDefault();
   document.getElementById('GeneratedProfile').innerHTML = 
    `<div>
        <img src=${data.profile} id="imageDisplay"></img>
        <p>NAME : ${data.name}</p>
        <p>AGE : ${data.age}</p>
        <p>GENDER : ${data.gender}</p>
        <p>SOCIAL : ${data.social}</p>
        <p>DETAILS : ${data.message}</p>
        <p>EMAIL : ${data.email}</p>
    </div>`


}
    return(
        <>
        <div>
            <form onSubmit={GenProfile} id="MyForm">
            <label>Upload Your Profile Picture :</label>
                <img id="imageDisplay"></img>
                <input id="picUrl" onChange={Mypic} name = 'profile' type="file"  placeholder="Enter Your Name Here" />
                
                <label>Enter Name :</label>
                <input onChange={Changes} value={data.name} type="text" name="name" placeholder="Enter Your Name Here" />
                <label>Enter Age :</label>
                <input onChange={Changes} value={data.age} min={1} max={200} type="number" name="age" placeholder="Enter Your Name Here" />
                <label>Choose your Gender :</label>
                <select name="gender" onChange={Changes}>
                    <option className="text-white" disabled defaultValue={''}>Select</option>
                    <option value='Male' >Male</option>
                    <option value='Female'>Female</option>
                    <option value='NoIdea'>No Idea</option>
                    <option value='Rather Not Say'>Rather Not Say</option>
                </select>
                <label>Choose your Social :</label>
                <div id="ChoiceSocial">
                    <input name="social" onClick={Changes} id="facebook" type="radio" value="FaceBook" />
                    <label style={choiceStyler} id="radioChoice" for='facebook' >FaceBook</label>
                    <input name="social" onClick={Changes} id="tiktok"  type="radio" value="TikTok"/>
                    <label style={choiceStyler} id="radioChoice" for='tiktok' >TikTok</label>
                    <input name="social" onClick={Changes} type="radio" id="Instagram" value="Instagram"/>
                    <label style={choiceStyler} id="radioChoice" for='Instagram' >Instagram</label>
                    <input name="social" onClick={Changes} type="radio" id="Twitter" value="Twitter"/>
                    <label style={choiceStyler} id="radioChoice" for='Twitter' >Twitter</label>
                </div>
                <label>Enter Your details :</label>
               <textarea onChange={Changes} name="message" value={data.message} placeholder="Ente details"></textarea>
                <label>Enter Your Email :</label>
                <input onChange={Changes} value={data.email} required type="email" name="email" placeholder="Enter Your Name Here" />
            
            
                <button type="submit">Get Profile</button>
            </form>
            
                  <div id="GeneratedProfile"></div>
           
        </div>
        </>
    )
}