import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchX, switchO } from '../../../utils/turnSlice';
import './Board.css';

function Board() { 

  const turn = useSelector(state => state.turn.value)
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const el = e.target;
    if(el.innerText) {
        return
    }   
    el.setAttribute('class', 'board-x')
    
    el.innerText = turn
    if(turn === 'x') {
      console.log('x went')
      dispatch(switchO())
    }
    if(turn === 'o') {
      console.log('o went')
      dispatch(switchX())
    }
  }

  //# Refactor
  return (
    <div id='board'>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
        <div onClick={handleClick}></div>
    </div>
  )
}

export default Board