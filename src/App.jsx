import { useCallback, useEffect, useState } from 'react'
import './App.css'



function App() {


  const [password,setpswd]=useState("")
  const[numallow,setnumallow]=useState(false)
  const[symallow,setsymallow]=useState(false)
  let numbers="123456789";
  let symbol="$!@%^&*(){}_+=-";
  let char="abcdefghijklmnopqrstuvwxyzABCCDEFHIJKLMNOPQRSTUVWXYZ";
  let sn="",ss="",sc=""

  const genpswd=()=>{
    for(let i=0;i<5;i++){
    sn += numbers[Math.floor(Math.random()*numbers.length)];
    ss += symbol[Math.floor(Math.random()*symbol.length)];
    sc += char[Math.floor(Math.random()*char.length)];
    }
    let pss=sc+sn+ss
    let pswd= pss.split("").sort(()=> Math.random()-0.5).join("")
    setpswd(pswd)
  }

  const onlychar= ()=>{
    for(let i=0;i<5;i++){
      sc += char[Math.floor(Math.random()*char.length)];
    }
    let pss=sc
    let pswd= pss.split("").sort(()=> Math.random()-0.5).join("")
    setpswd(pswd)
  }

  const charsym= ()=>{
    for(let i=0;i<5;i++){
      sc += char[Math.floor(Math.random()*char.length)];
      ss += symbol[Math.floor(Math.random()*symbol.length)];
    }
    let pss=sc+ss
    let pswd= pss.split("").sort(()=> Math.random()-0.5).join("")
    setpswd(pswd)
  }

  const charnum = ()=>{
    for(let i=0;i<5;i++){
      sc += char[Math.floor(Math.random()*char.length)];
      sn += numbers[Math.floor(Math.random()*numbers.length)];
    }
    let pss = sc+sn
    let pswd= pss.split("").sort(()=> Math.random()-0.5).join("")
    setpswd(pswd)
  }

const geneartor= ()=>{
  if(numallow==false && symallow==false){
    onlychar()
  }
  if(numallow==true){
    charnum();
  }
  if(symallow==true){
    charsym()
  }
  if(numallow==true && symallow==true){
    genpswd()
  }
  
}

useEffect(()=>{
geneartor()
},[numallow,symallow])


  return (
    <>
    <h1 className='text-xl text-white' >password geneartor</h1>
    <h3>Generated password --- {password} </h3>
    
    numbers<input className='m-2' type="checkbox" onChange={()=>setnumallow(!numallow)} />
    special symbol <input type="checkbox" onChange={()=>setsymallow(!symallow)}  />
    <button className='m-5'  onClick={geneartor}> generaor</button>
    </>
  )
}

export default App
