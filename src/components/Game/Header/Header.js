import React, { useEffect, useMemo } from 'react';
import './Header.css';
import logo1 from '../../../img/O-mark.svg'
import logo2 from '../../../img/X-mark.svg'
import { useSelector, useDispatch } from 'react-redux';
import { switchO, switchX } from '../../../utils/turnSlice';

function Header() {
  const firstTurn = useSelector(state => state.playerOneSide.value);
  const turn = useSelector(state => state.turn.value)  
  const dispatch = useDispatch();

  useEffect(() => {
      if(firstTurn === 'o'){
          dispatch(switchO());
      }
      else if(firstTurn === 'x'){
          dispatch(switchX())
      }
  }, [])

  return (
    <div id='game'>
        <div className='game-icon'>
            <img src={logo1}/>
            <img src={logo2}/>
        </div>
        <div className='game-turn'>
            <p>{turn.toUpperCase()} Turn</p>
        </div>
        <div>
            <svg className='game-undo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"/>
            </svg>
        </div>
    </div>
  )
}

export default Header