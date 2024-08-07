import './App.css';
import googleLogo from './images/google.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const clickManager = () => {
    setNumClicks(numClicks + 1);
  };

  const clearConter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='container-logo'>
        <img 
          className='clicker-logo'
          src={googleLogo}
          alt='Logo'/>
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button 
          text='Click'
          isClickButton={true}
          clickManager={clickManager} />
        <Button 
          text='Clear'
          isClickButton={false}
          clickManager={clearConter} />
      </div>
    </div>
  );
}

export default App;