import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './End.css'
function End() {
  const winner = useSelector(state => state.winner.value)

  const tieEnd = <h1 className='end-result'>Tie Game. Thanks for Playing</h1>
  const printWinner = () => {
    if(winner === 'x') return <h1 className='end-result'>X Wins! Thank you for playing</h1>
    else if(winner === 'o') return <h1 className='end-result'>O Wins! Thank you for playing</h1>
  }
  return (
    <div id='end-page'>
      {winner === 'tie' ? tieEnd : printWinner()}
      <p className='end-farewell'>Thank you for playing</p>
      <Link to='/' className='end-home-link'>Click here to play again</Link>
      <div id='end-hero'>
        {winner}
      </div>
    </div>
  )
}

export default End