import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  function toggleMode() {
    // console.log(value);
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert(" Dark Mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(" Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtilis" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Textform showAlert={showAlert} heading="My text here" mode={mode} />
      </div>
    </>
  );
}

export default App;
