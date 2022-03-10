import React from 'react';
import logo1 from '../../img/O-mark.svg'
import logo2 from '../../img/X-mark.svg'
import './Main.css';
function Main() {
  return (
    <div id='home-main'>
        <h2>Pick Player One's Mark</h2>
        <div className='pick-side-ctn'>   
            <button className='pick-side o-size'><img src={logo1} alt='x' /></button>
            <button className='pick-side'><img src={logo2} alt='o'/></button>
            <h2>Player 1 is X</h2>
        </div>
        <div className='start-btns'>
            <button className='home-start-btn'>Start Vs PC</button>
            <button className='home-start-btn'>Start Vs Player</button>
        </div>
    </div>
  )
}

export default Main