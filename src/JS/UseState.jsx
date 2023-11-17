import react, {  useState } from 'react'
import '../App.css'
export default MyUseState
 function MyUseState(){
    var ageVal =  Math.floor(Math.random() * 10)
   
    const [user, setUser] = useState([
        {
            name : 'kenji',
            age : 36,
            id : 1,
            gender : 'male'
        },
        {
            name : 'Brian',
            age : 30,
            id : 1,
            gender : 'male'
        },
        ,
        {
            name : 'John',
            id : 1,
            age : ageVal,
            gender : 'male'
        },
        {
            name : 'Kage',
            id : 1,
            age : 22,
            gender : 'female'
        },
        {
            name : 'Shadow',
            id : 1,
            age : 11,
            gender : 'female'
        }
])
const [next, setNext] = useState(0)

const userMapper = user.map((details) => 
    <div className='flex gap-4 justify-center border-gray-500 bg-emerald-400 rounded-md font-serif'>
       
       <div className='block mt-4 mb-7 p-4 border-2  '>
         <h1 className='text-bold bg-slate-500 text-white flex justify-center border-2 border-transparent hover:bg-green-300'>Name :{details.name}</h1>
        
        <h1 className='text-bold bg-slate-500 text-white flex justify-center border-2 border-transparent hover:bg-green-300'>Age :{details.age}</h1>
        <h1 className='text-bold bg-slate-500 text-white flex justify-center border-2 border-transparent hover:bg-green-300'>Gender :{details.gender}</h1>
       </div>
       
    </div>
)
const GetNext = (props) => {
    
   setNext((n) => n + 1)
   if(next < 6) {
        document.getElementById('detailsNext').innerHTML = 
    ` <p>Name : ${user[next].name}</p>
        <p>Age : ${user[next].age}</p>
        <p>Gender: ${user[next].gender}</p>
    `
    }
   
   }


const GetPrevious = (props) => {
    setNext((n) => n - 1)
    if(next > 0) {
         document.getElementById('detailsNext').innerHTML = 
    ` <p>Name : ${user[next].name}</p>
      <p>Age : ${user[next].age}</p>
      <p>Gender : ${user[next].gender}</p>
    `
        }
    }



    return(
      <>
    <div>{userMapper}</div>
    <div  id='detailsNext'></div>
    <div id='NextDiv' className='flex  gap-4 justify-center'>
        <button className='border-2 border-yellow-400 text-emerald-500 font-bold rounded-sm ' onClick={() => GetPrevious(1)}>Get Previous Details</button>
        <button className='border-2 border-yellow-400 text-emerald-500 font-bold rounded-sm ' onClick={() => GetNext(1)}>Get Next Details</button>

        </div>
    </>  
    )
    
}