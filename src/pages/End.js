import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function End() {
  const winner = useSelector(state => state.winner.value)
  return (
    <div>
      <h1>{winner.toUpperCase()} Wins</h1>
      <p>Thank you for playing</p>
      <Link to='/'>Click here to play again</Link>
    </div>
  )
}

export default End