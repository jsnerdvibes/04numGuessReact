import { useState } from 'react'

function App() {

  let num = Math.ceil((Math.random()*30))

  num=num%2===0?num:num+1;

const messages=["Click Start to start the Game",
  'Think of a number(a number you can calculate easily)',
  "Double the Number",
  `Add ${num} to it`,
  "Divide the number by 2",
  "Subtract it by the original number(number you thought of initially)",
  `You have ${num/2} left with you (Click Reset if you want to play again)`
];

const btn=["Start","Done"]
let [btnCount,setbtnCount]=useState(0);

const [count,setCount]=useState(0);

const Start=()=>{
  if(count<messages.length-1)setCount(count+1)
  if(count>-1)setbtnCount(btnCount=1)

  }
const Reset=()=>setCount(count*0)

  return (
    <>
    <div className='h-screen flex justify-center items-center flex-col font-sans bg-red-100'>
      <h1 className='text-center text-4xl mb-8'>Guess !!!!</h1>
      <h2 className='text-4xl mb-24 text-center'>{messages[count]}</h2><div>
      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 mt-12" onClick={Start}>{btn[btnCount]}</button>
      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 mt-12" onClick={Reset}>Reset</button></div>
      </div>
    </>
  )
}

export default App
