import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [option, setoption] = useState(" ");
  const [bg,setbg]= useState(" ");
  const mood={
    Happy:{message:"😊 Glad you're feeling happy! Stay Happy:)",color:"#FFD54F"},
    Sad:{message:"😒 Sending you Hugs! Now Smile :)",color:"#64B5F6"},
    Exhausted:{message:" 😑 Hope Something Comes fun your way ",color:"#FFB74D"},

  }
  const [mesg,setmesg]=useState(" ");
  function getmessage(){
     console.log(mood[option]["message"]);
     setmesg(mood[option].message);  
  }
   function handleColor(){
    setbg(mood[option].color)
   }  
  return (
    <>
    <div className={`w-full h-screen`} style={{ backgroundColor: bg }}>
      <h1 className="font-semibold text-5xl  py-4"  >Choose your mood</h1>
      <div className='flex min-h-screen w-full items-center flex-col mt-5'>
      <div className='flex h-68 w-2/3 items-center justify-between '>
    <button className='text-4xl   bg-amber-200 w-50 h-32 rounded-md px-2 py-2' 
    onClick={(e)=>{setoption("Happy")}}>😊 <br></br><p className="text-3xl">Happy</p></button>

    <button className='text-4xl   bg-amber-200 w-50 h-32 rounded-md  px-2 py-2'
     onClick={(e)=>{setoption("Sad")}}>😒 <br></br><p className="text-3xl">Sad</p></button>

    <button className='text-4xl  bg-amber-200 w-50 h-32 rounded-md  px-2 py-2'
     onClick={(e)=>{setoption("Exhausted")}}>😑 <br></br><p className="text-3xl">Frustrated</p></button>
    </div>
    <div >
    <button className="bg-blue-500 text-white text-sm px-8 py-3 rounded-full mt-20"onClick={(e)=>{getmessage(e),handleColor()}}>Get message</button>
    <h1 className='mt-20 text-5xl font-semibold message'>{mesg}</h1>
    </div>
  </div>

    <h1 className='mt-20 text-6xl font-semibold message'>{mesg}</h1>
    </div>
    </>
  )
}

export default App
