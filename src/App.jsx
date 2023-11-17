import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyUseState from './JS/UseState'
import MyRef from './JS/UseRef'
import MyEffect from './JS/UseEffect'
import MyReducer from './JS/UseReducer'
import MyCallback from './JS/UseCallback'
import MyMemo from './JS/UseMemo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-200 sticky justify-center flex w-full top-0  border-2 p-2 font-mono text-sm rounded-md border-slate-500 ' id='hookType'>USE STATE</h1>
    <div className='border-2 w-full h-fit'><MyUseState /></div>
    <h1 className='bg-green-200 sticky justify-center flex w-full top-0  border-2 p-2 font-mono text-sm rounded-md border-slate-500 ' id='hookType'>USE REF</h1>
    <div className='border-2 w-full h-fit'><MyRef /></div>
    <h1 className='bg-green-200 sticky justify-center flex w-full top-0  border-2 p-2 font-mono text-sm rounded-md border-slate-500 ' id='hookType'>USE EFFECT</h1>
    <div className='border-2 w-full h-fit'><MyEffect /></div>
    <h1 className='bg-green-200 sticky justify-center flex w-full top-0  border-2 p-2 font-mono text-sm rounded-md border-slate-500 ' id='hookType'>USE REDUCER</h1>
    <div className='border-2 w-full h-fit'><MyReducer /></div>
    <h1 className='bg-green-200 sticky justify-center flex w-full top-0  border-2 p-2 font-mono text-sm rounded-md border-slate-500 ' id='hookType'>USE CALLBACK</h1>
    <div className='border-2 w-full h-fit'><MyCallback /></div>
    <h1 className='bg-green-200 sticky justify-center flex w-full top-0  border-2 p-2 font-mono text-sm rounded-md border-slate-500 ' id='hookType'>USE MEMO</h1>
    <div className='border-2 w-full h-fit'><MyMemo /></div>
    
    </>
  )
}

export default App
