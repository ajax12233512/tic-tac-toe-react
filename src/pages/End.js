import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function End() {
  const winner = useSelector(state => state.winner.value)

  const tieEnd = <h1>Tie Game. Thanks for Playing</h1>
  const printWinner = () => {
    if(winner === 'x') return <h1>X Wins! Thank you for playing</h1>
    else if(winner === 'o') return <h1>O Wins! Thank you for playing</h1>
  }
  return (
    <div>
      {winner === 'tie' ? tieEnd : printWinner()}
      <p>Thank you for playing</p>
      <Link to='/'>Click here to play again</Link>
    </div>
  )
}

export default End