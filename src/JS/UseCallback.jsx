import react, { useCallback, useState } from 'react'
import '../App.css'

import SecondOne from './secondCallback'
import { data } from 'autoprefixer'
export default MyCallback

 function MyCallback(){

    const [develooper, setdeveloper] = useState({
        Name : 'BRIAN',
        AGE : 'RATHER NOT SAY',
        STATUS : 'UNDERCOVER'
    })

    console.log(develooper.Name + ' : is desplayed first when rendered')
 useCallback(() => {
    
        console.log('am here')
        
        console.log(develooper)
        SecondOne()
        console.log(develooper.Name + 'is desplayed secondly after the dependancy has changed')
    },[develooper])


console.log('am rendered first')

function Changer() {
setdeveloper((data) => {
    return {
        ...data,
        Name : 'kenji'
    }
})

}
    return(
        <>
        <div id='callbackDiv'>
        <p>It can only be spoted and easily understood when you open the inspection of this webpage</p>
        <button id='CallbackBtn' onClick={Changer}>Click Me</button>
        </div>
        </>
    )
}