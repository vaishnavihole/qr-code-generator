import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <p >Enter your text or URL</p>

        <input type='text' placeholder='Text or URL' />

        <div className='imgBox'>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" className='qr-code-img' />

          <button className='btn-generator'>GeneratorQR Code</button>

        </div>

      </div>
    </>
  );
}

export default App;
