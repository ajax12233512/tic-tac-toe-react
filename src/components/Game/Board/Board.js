import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchX, switchO } from '../../../utils/turnSlice';
import './Board.css';

function Board() { 

  let [xSpaces] = useState([]);
  let [ySpaces] = useState([]);
  
  const turn = useSelector(state => state.turn.value)
 
  const dispatch = useDispatch();

  useEffect(() => {
    
  })

  const handleClick = (e) => {
    const el = e.target;
    const space = el.attributes.datatype.value;
    if(el.innerText) {
        return
    }   
    el.setAttribute('class', 'board-x')

    if(xSpaces.length + ySpaces.length === 9){
      window.location.assign('/end')
    }
 
    el.innerText = turn
    if(turn === 'x') {
      xSpaces.push(space)
      dispatch(switchO())
    }
    if(turn === 'o') {
      ySpaces.push(space)
      dispatch(switchX())
    }


  }
  
  //# Refactor
  return (
    <div id='board'>
        <div datatype='a1' onClick={handleClick}></div>
        <div datatype='b1' onClick={handleClick}></div>
        <div datatype='c1' onClick={handleClick}></div>
        <div datatype='a2' onClick={handleClick}></div>
        <div datatype='b2' onClick={handleClick}></div>
        <div datatype='c2' onClick={handleClick}></div>
        <div datatype='a3' onClick={handleClick}></div>
        <div datatype='b3' onClick={handleClick}></div>
        <div datatype='c3' onClick={handleClick}></div>
    </div>
  )
}

export default Board