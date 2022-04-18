import React, { useEffect } from 'react';
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
            <img src={logo1} alt='circle'/>
            <img src={logo2} alt='circle'/>
        </div>
        <div className='game-turn'>
            <p>{turn.toUpperCase()} Turn</p>
        </div>
        
    </div>
  )
}

export default Header