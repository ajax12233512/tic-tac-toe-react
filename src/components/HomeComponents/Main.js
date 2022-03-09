import React from 'react';
import logo1 from '../../img/O-mark.svg'
import logo2 from '../../img/X-mark.svg'
import './Main.css';
function Main() {
  return (
    <div id='home-main'>
        <h2>Pick Player One's Mark</h2>
        <div className='pick-side-ctn'>   
            <img className='pick-side o-size' src={logo1} alt='x' />
            <img className='pick-side' src={logo2} alt='o'/>
        </div>
    </div>
  )
}

export default Main