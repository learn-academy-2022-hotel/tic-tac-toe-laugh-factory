import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("player 1")

  const handleGamePlay = (clickSquare) => {
    let updateBoard = [...board]
    updateBoard[clickSquare]="X"
    setBoard(updateBoard)
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
      {board.map((shape, index) => {
        return(
        <Square 
        shape={shape}
        index={index}
        handleGamePlay={handleGamePlay}
        />
        )
        })}
        <button onClick={resetGame}>Restart</button>
      </div>
    </>
  )

}

export default App