import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'



function App() {

  let numbers="123456789";
  let symbol="$!@%^&*(){}_+=-";
  let char="abcdefghijklmnopqrstuvwxyzABCCDEFHIJKLMNOPQRSTUVWXYZ";

  const [password,setpswd]=useState("")
  const[numallow,setnumallow]=useState(false)
  const[symallow,setsymallow]=useState(false)
  const [length,setlength] = useState(8)

  const passgenerator = useCallback(()=>{
    let pass =""
    let str=char
    if(numallow){
      str+=numbers
    }
    if(symallow){
      str+=symbol
    }
    for(let i =0;i<length;i++){
      let n = Math.floor(Math.random()*str.length)
      pass+=str[n]
    }
    setpswd(pass)
  }
  ,[numallow,symallow,length])


useEffect(()=>{
passgenerator()
},[numallow,symallow,setpswd,length])

useEffect(() => {
  setpswd(""); 
}, []);

  return (
    <>
    <h1 className='text-xl text-white' >password geneartor</h1>
    <h3>Generated Password: {password || "No password generated yet"}</h3>

    
    numbers<input className='m-2' type="checkbox"  onChange={()=>setnumallow(!numallow)} />
    special symbol <input type="checkbox" className='m-2' onChange={()=>setsymallow(!symallow)}  />
    {length}<input type="range"  className='w-20 m-2 bg-gray-300 text-black' onChange={(e) => setlength(Number(e.target.value))} value={length} min="4"
          max="20"/>
    <button className='m-5'  onClick={passgenerator}> generaor</button>
   
    </>
  )
}
export default App
