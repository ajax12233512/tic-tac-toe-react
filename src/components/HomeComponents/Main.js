import React from 'react';
import logo1 from '../../img/O-mark.svg'
import logo2 from '../../img/X-mark.svg'
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import { pickO, pickX } from '../../utils/playerSideSlice'

function Main() {
  const playerOneSide = useSelector(state => state.playerOneSide.value);
  const dispatch = useDispatch();

  

  return (
    <div id='home-main'>
        <h2>Pick Player One's Mark</h2>
        <div className='pick-side-ctn'>   
            <button 
            onClick={() => dispatch(pickO())}
            style={playerOneSide === 'o' ? { backgroundColor: 'rgb(255,255,255,.5)', padding: '20px'} : {padding: '20px'}}
            >
                <img datatype='o' src={logo1} alt='o' />
            </button>
            <button 
            onClick={() => dispatch(pickX())} 
            style={playerOneSide === 'x' ? { backgroundColor: 'rgb(255,255,255,.5)', padding: '20px'} : {padding: '20px'}}
            >
                <img datatype='x' src={logo2} alt='x'/>
            </button>
            <h2>Player 1 is {playerOneSide.toUpperCase()}</h2>
        </div>
        <div className='start-btns'>
            <button className='home-start-btn'>Start Vs PC</button>
            <button className='home-start-btn'>Start Vs Player</button>
        </div>
    </div>
  )
}

export default Main