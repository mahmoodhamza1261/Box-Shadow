import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [Hori,setHori]=useState(10)
  const [Veri,setVeri]=useState(10)
  const [Blur,setBlur]=useState(10)
  const [color,setColor]=useState("black")
  const [checkOn,setcheckOn]=useState(false)

  return (
    <div className="App">
    <div className="controls">
      <label>Horizontal Length</label>
    <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
      
      <label>vertical Length</label>
    <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
    <label>blur</label>
    <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
    <label>color</label>
    <input type="color"   value={color} onChange={(e)=>setColor(e.target.value)} />
    </div>
    <div className="switch">
    <label>
      Outline
      <input type="checkbox" checked={checkOn} onChange={()=>setcheckOn(!checkOn)}/>
      <span className="lever"></span>
      Inset
    </label>
  </div>
    <div className="output">
      <div className="box" style={{boxShadow:`${checkOn?"inset":""} ${Hori}px ${Veri}px ${Blur}px ${color}`}}>
        <p>box-shadow:{Hori}px {Veri}px {Blur}px {color}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
