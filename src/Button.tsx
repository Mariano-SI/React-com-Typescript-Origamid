import React from 'react'

type ButtonProps = {
  incremetar: React.Dispatch<React.SetStateAction<number>>;
}

function Button({incremetar}: ButtonProps) {
  return (
    <button onClick={() => incremetar((number)=> number + 1)}>Incrementar</button>
  )
}

export default Button