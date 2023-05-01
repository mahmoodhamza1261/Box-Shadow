import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [Hori,setHori]=useState(10)
  const [Veri,setVeri]=useState(10)
  const [Blur,setBlur]=useState(10)

  return (
    <div className="App">
    <div className="controls">
      <label>Horizontal Length</label>
    <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
      
      <label>vertical Length</label>
    <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
    <label>blur</label>
    <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
    </div>
    <div className="output">
      <div className="box"></div>
    </div>
    </div>
  );
}

export default App;
