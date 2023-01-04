import React from 'react'

const Square = ({shape, index, handleGamePlay}) => {

  const handleClick = () => {
    handleGamePlay(index)
  }
  return (
    <div className="square" onClick={handleClick}>{shape}</div>
  )
}
export default Square
