import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [qrText, setQrText] = useState('');
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
          className='qr-code-img' />
        </div>

        <button type='button' className='btn-download'>Download QR</button>

      </div>
    </>
  );
}

export default App;
