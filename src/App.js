import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player1, setPlayer1] = useState(true)

  
  const handleGamePlay = (index) => {
    //if(isaWinner || updateBoard[index]) return;
    if(board[index] === null) {
      let updateBoard = [...board]
      updateBoard[index]= player1 ? "X" : "O"
      setBoard(updateBoard)
      setPlayer1(!player1)
    }
  }
  
  const isaWinner = (squares) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
  }

  const winner = isaWinner(board)
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
  }
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner &&
      <h2>{winner} is the winner</h2>}
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