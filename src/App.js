import './App.css';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

function App() {
  const [qrText, setQrText] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [showQr, setShowQr] = useState(false);

  useEffect(() =>{
    if(qrText.length > 0){
      setShowQr(true);
      setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`)
    }
    else{
      setShowQr(false);
    }
  }, [qrText])

  
  const downloadQR = () =>{
    saveAs(qrUrl, 'qr.png')
  }

  return (
    <>
      <div className='container'>
        <p >Enter your text or URL</p>

        <input type='text' placeholder='Text or URL' value={qrText}
         onChange={(e)=>{
          setQrText(e.target.value);
        }}/>

        <div className='img-box'>
          {showQr ? <img src={qrUrl} className='qr-code-img'/> : ''}
        </div>

        <button type='button' className='btn-download' onClick={downloadQR}>
          Download QR Code
        </button>

      </div>
    </>
  );
}

export default App;
