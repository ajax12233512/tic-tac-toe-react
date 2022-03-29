import React from 'react';
import logo1 from '../../img/O-mark.svg'
import logo2 from '../../img/X-mark.svg'
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import { pickO, pickX } from '../../utils/playerSideSlice'


function Main() {
  const playerOneSide = useSelector(state => state.playerOneSide.value);
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    const firstTurn = e.target.attributes.datatype.value
    window.localStorage.setItem('firstTurn', firstTurn);
  }

  return (
    <div id='home-main'>
        <h2>Pick Player One's Mark</h2>
        <div className='pick-side-ctn'>   
            <button datatype='o' 
            onClick={(e) => {
                dispatch(pickO())
                handleClick(e)
            }}
            style={playerOneSide === 'o' ? { backgroundColor: 'rgb(255,255,255,.5)', padding: '20px'} : {padding: '20px'}}
            >
                <img datatype='o' src={logo1} alt='o' />
            </button>
            <button datatype='x' 
            onClick={(e) => {
                dispatch(pickX())
                handleClick(e);
            }} 
            style={playerOneSide === 'x' ? { backgroundColor: 'rgb(255,255,255,.5)', padding: '20px'} : {padding: '20px'}}
            >
                <img datatype='x' src={logo2} alt='x'/>
            </button>
            <h2>Player 1 is {playerOneSide.toUpperCase()}</h2>
        </div>
        <div className='start-btns'>
            <a href='/game'><button className='home-start-btn'>Start Vs PC</button></a>
            {/* <a href='/game'><button className='home-start-btn'>Start Vs Player</button></a> */}
        </div>
    </div>
  )
}

export default Main