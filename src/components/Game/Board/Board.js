import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchX, switchO } from '../../../utils/turnSlice';
import { xWin, oWin } from '../../../utils/winSlice'
import './Board.css';

function Board() { 

  let [xSpaces] = useState([]);
  let [oSpaces] = useState([]);
  
  const turn = useSelector(state => state.turn.value)
  const dispatch = useDispatch();

  useEffect(() => {
    if(xSpaces.length + oSpaces.length === 9){
      document.location.assign('/end')
    }
  })

  const handleClick = (e) => {
    const el = e.target;
    const space = el.attributes.datatype.value;
    if(el.innerText) {
        return
    }   
    el.setAttribute('class', 'board-x')
 
    el.innerText = turn
    if(turn === 'x') {
      xSpaces.push(space)
      dispatch(switchO())
    }
    if(turn === 'o') {
      oSpaces.push(space)
      dispatch(switchX())
    }

    if(xSpaces.includes('a1') && xSpaces.includes('b1') && xSpaces.includes('c1')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('a1') && oSpaces.includes('b1') && oSpaces.includes('c1')) {
      dispatch(oWin())
      document.location.assign('/end')
    }

    if(xSpaces.includes('a1') && xSpaces.includes('b2') && xSpaces.includes('c3')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('a1') && oSpaces.includes('b2') && oSpaces.includes('c3')) {
      dispatch(oWin())
      document.location.assign('/end')
    }

    if(xSpaces.includes('a1') && xSpaces.includes('a2') && xSpaces.includes('a3')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('a1') && oSpaces.includes('a2') && oSpaces.includes('a3')) {
      dispatch(oWin())
      document.location.assign('/end')
    }

    if(xSpaces.includes('b1') && xSpaces.includes('b2') && xSpaces.includes('b3')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('b1') && oSpaces.includes('b2') && oSpaces.includes('b3')) {
      dispatch(oWin())
      document.location.assign('/end')
    }

    if(xSpaces.includes('c1') && xSpaces.includes('b2') && xSpaces.includes('a3')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('c1') && oSpaces.includes('b2') && oSpaces.includes('a3')) {
      dispatch(oWin())
      document.location.assign('/end')
    }

    if(xSpaces.includes('c1') && xSpaces.includes('c2') && xSpaces.includes('c3')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('c1') && oSpaces.includes('c2') && oSpaces.includes('c3')) {
      dispatch(oWin())
      document.location.assign('/end')
    }

    if(xSpaces.includes('a3') && xSpaces.includes('b3') && xSpaces.includes('c3')) {
      dispatch(xWin())
      document.location.assign('/end')
    }
    if(oSpaces.includes('a3') && oSpaces.includes('b3') && oSpaces.includes('c3')) {
      dispatch(oWin())
      document.location.assign('/end')
    }
  }

  //Possible Solutions
// A1 B1 C1
// A1 B2 C3
// A1 A2 A3
// B1 B2 B3
// C1 B2 A3
// C1 C2 C3
// A3 B3 C3
  
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