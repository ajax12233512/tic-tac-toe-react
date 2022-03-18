import React, { useState } from 'react';
import './Board.css';

function Board() { 

  const [turn, setTurn] = useState('x');

  const handleClick = (e) => {
    const el = e.target;
    if(el.innerText) {
        el.innerText = ''
        return
    }   
    el.setAttribute('class', 'board-x')
    
    if(turn === 'x') {
      el.innerText = 'x'; 
      setTurn('o'); 
      return 
    }
    else if(turn === 'o') { 
      el.innerText = 'o';
      setTurn('x'); 
      return 
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