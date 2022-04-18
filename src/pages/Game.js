import React from 'react'
import Header from '../components/Game/Header/Header'
import Board from '../components/Game/Board/Board'
import './Game.css'
function Game() {
  return (
    <div id='game-page'>
      <Header />
      <Board />
      <a id='game-home-btn' href='/'>Home</a>
    </div>
  )
}

export default Game