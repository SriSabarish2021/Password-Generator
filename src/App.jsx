import './App.css'
import Title from './title'
import Leninp from './leninp'
import Checkbox from './checkbox'
import Getpass from './getpass'
import Copy from './copy'
import { useState } from 'react'

function App() {
  const[curlen,chnagelen]=useState('')
  const[upper,chnageupper]=useState(true)
  const[lower,chnagelower]=useState(true)
  const[num,chnagenum]=useState(true)
  const[spcl,chnagespcl]=useState(true)
  const[password,getten]=useState("")

  const getterpass=()=>{
    let charset=""
    if(upper) charset +="ABCDEFGHIJKLMONPQRSTUVWXYZ";
    if(lower) charset +="abcdefghijklmnopqrstuvwxyz";
    if(num) charset +="0123456789";
    if(spcl) charset +="~!@#$%^&*()_-/*+<>|";
    console.log(charset);
    let gottedpass=""
    for(let id=0;id<curlen;id++){
      let rannum=Math.floor(Math.random()*charset.length)
      gottedpass+=charset.charAt(rannum)
    }
    getten(gottedpass)
  }
  const copied=()=>{
    navigator.clipboard.writeText(password)
    let str="Password copied in your clipboard"
    window.alert(str)
  }
  return (
    <>
      <Title/>
      <Leninp curlen={curlen}
      chnagelen={chnagelen}/>
      <Checkbox upper={upper} chnageupper={chnageupper}
      lower={lower} chnagelower={chnagelower}
      num={num} chnagenum={chnagenum}
      spcl={spcl} chnagespcl={chnagespcl}/>
      <Getpass getterpass={getterpass}/>
      <Copy password={password}
      copied={copied}/>
    </>
  )
}

export default App
