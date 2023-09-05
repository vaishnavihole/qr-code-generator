import './App.css';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

function App() {
  const [qrText, setQrText] = useState('');

  const downloadQR = () =>{
    saveAs(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`, 'qr.png')
  }
  
  return (
    <>
      <div className='container'>
        <p >Enter your text or URL</p>

        <input type='text' placeholder='Text or URL' value={qrText}
         onChange={(e)=>{
          setQrText(e.target.value);
        }}/>

        <div className='imgBox'>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`} 
          className='qr-code-img' download/>
        </div>

        <button type='button' className='btn-download' onClick={downloadQR}>
          Download QR Code
        </button>

      </div>
    </>
  );
}

export default App;
