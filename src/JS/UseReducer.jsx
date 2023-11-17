import React, { useEffect, useReducer, useState } from "react";
import '../App.css'
import { Result } from "postcss";
export default MyReducer
function  MyReducer(){
    var Store = {
        num1 : '',
        num2 : '',
        parameter : ''
    }
 const [last, setlast] = useState(true)
    const Reducer = (argument, action) => {
        switch(action.type) {
            case 'number' : 
            
            return {
                    ...Store,
                    num1 : action.Val
                    }
                
                break
            case 'sign' : 
                
            return {
                ...Store,
                    parameter : action.Val
                    }
                
                break
            default :
                console.log('non')
        }

        
    }
    const [argument, dispatch] = useReducer(Reducer, Store)
    var displayer = document.getElementById('displayer')
    var num2 = document.getElementById('num2')
    
        var char = document.getElementById('character')
        var answerDis = document.getElementById('answer')
    
    
    useEffect(() => {
        var displayer = document.getElementById('displayer')
        var num2 = document.getElementById('num2')
        
        var char = document.getElementById('character')
        char.innerHTML = argument.parameter
        
        if(last) {
            
            displayer.value += argument.num1
        }else if(!last){
        
            num2.value += argument.num1
        }
    },[argument])


function AnswerFunc() {
    
    
  switch(char.innerHTML){
    case '+' :
        
        answerDis.innerHTML = Number(displayer.value) + Number(num2.value)
        break
    case '-' :
        
        answerDis.innerHTML = Number(displayer.value) - Number(num2.value)
        break
    case '/' :
        
        answerDis.innerHTML = Number(displayer.value) / Number(num2.value)
        break
    case '*' :
        
        answerDis.innerHTML = Number(displayer.value) * Number(num2.value)
        break
    default :
        console.log("theres a problem")
  }

}

    const eqals = {
        color : 'white',
        backgroundColor : 'blue'
    }
    return(
        <>
        <div id="calcDiv">
          
        <input onFocus={() => setlast(true)}  type="number"   placeholder="number" id="displayer"></input>
        <textarea disabled placeholder="+" id="character"></textarea>
        <input onFocus={() => setlast(false)} type="number"  placeholder="number" name="number2" id="num2"></input>
        <textarea disabled  placeholder="answer" id="answer"></textarea> 
        {/* <div id="inputDiv">
            <input min={0} max={10000} type="number"></input>
        <input min={0} max={10000} type="number"></input> 
        </div> */}
       
        <div id="actionsDiv">
            <button onClick={() => dispatch({type : 'number' , Val : '7'})} >7</button>
            <button onClick={() => dispatch({type : 'number' , Val : '8'})}>8</button>
            <button onClick={() => dispatch({type : 'number' , Val : '9'})}>9</button> 
            <button onClick={() => dispatch({type : 'sign' , Val : '/'})} id="func">&#8763;</button>
            <button onClick={() => dispatch({type : 'number' , Val : '4'})}>4</button>
            <button onClick={() => dispatch({type : 'number' , Val : '5'})}>5</button>
            <button onClick={() => dispatch({type : 'number' , Val : '6'})}>6</button>
            <button onClick={() => dispatch({type : 'sign' , Val : '*'})} id="func">x</button>
            <button onClick={() => dispatch({type : 'number' , Val : '1'})}>1</button>
            <button onClick={() => dispatch({type : 'number' , Val : '2'})}>2</button>
            <button onClick={() => dispatch({type : 'number' , Val : '3'})}>3</button>
            <button onClick={() => dispatch({type : 'sign' , Val : '-'})} id="func">-</button>
            <button onClick={() => dispatch({type : 'number' , Val : '0'})}>0</button>
            <button onClick={() => dispatch({type : 'number' , Val : '.'})}>.</button>
            <button onClick={AnswerFunc} style={eqals}>=</button>
            <button onClick={() => dispatch({type : 'sign' , Val : '+'})} id="func">+</button>
            
        </div>
      
            
        
        </div>
        <address id="help" disabled>
                <p>how to use : </p>
                <p>1. Select any of the input </p>
                 <p>2. You can enter the data manually, or enter then by clicking the numbered buttons </p>
                <p>3. Select an operator eg + ,- </p>
                <p>4. Click equal sign</p>
                
            </address>
        </>
    )
}