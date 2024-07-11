import React, { useState } from 'react'


function App() {
  const [color, setColor]=React.useState("#000000");
  const [type, setType]=React.useState("hex");

  function getRandom(length){
    return Math.floor(Math.random()*length);
  }

  function decideColor(decid){
    if(decid==="hex"){
      setType('hex');
    }
    else{
      setType('rgb');
    }
  }
  var rbgc="";
  var hexc="#";

  const hexVar=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

  function getColor(){
    if(type=='hex'){
      hexc="#";
      for(var i=0;i<6;i++){
        hexc+=hexVar[getRandom(hexVar.length)];
        
      }
      console.log(hexc);
      setColor(hexc);
      console.log(getRandom(hexVar.length));
    }
    else{
      var r=getRandom(255);
      var g=getRandom(255);
      var b=getRandom(255);
      rbgc="rgb("+r+","+g+","+b+")";
      setColor(rbgc);
    }
  }


  return(
    <div
      style={{
        backgroundColor:color,
        width:"100%",
        height:"100vh",
        margin:"0px",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}
      className='container'>
      <div style={{
        display:'flex',
        gap:'2rem'
      }} 
        
        className="buttons">
        <button onClick={()=>decideColor('hex')}>Hex Color</button>
        <button onClick={()=>decideColor('rgb')}>Rgb Color</button>
        <button onClick={getColor}>Generate Random Color</button>
      </div>

      <div style={{
        display:'flex', 
        flexDirection:'column', 
        marginTop:'10rem', 
        justifyContent:'center',
        alignItems:'center' 

      }} className="about">
        {(type=='hex')?<h1>Hex Color</h1>:<h1>Rgb Color</h1>}
        <h2>{color}</h2>
      </div>
    </div>
  )
}

export default App
