import { useState } from 'react';
import QRcode from 'react-qr-code';
import './App.css';

function App() {
  const [input,setInput]=useState('');
  const [qrCode,setQrCode]=useState("")

  function generate(){

    setQrCode(input);
    setInput('');
  }

  return (
    <div className="container">
      <h1 className='heading'>QR Code Generator</h1>
      <div className="get-input">
        <input onChange={(evt)=>setInput(evt.target.value)} type="text" placeholder='Enter your text' name='qr-value' value={input} />
        <button onClick={generate}>Generate</button>
      </div>
      <div className="qr-code">
      {(qrCode=="")?<h3>No QR Generated</h3>:<QRcode id="qr-value" value={qrCode} size="400" bgColor='whitesmoke'/>}
        
      </div>
    </div>
  )
}

export default App
