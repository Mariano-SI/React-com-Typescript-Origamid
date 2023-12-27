import React, { useState } from "react";
import Button from "./Button";

function App() {

  const [total, setTotal] = useState(0);

  function incrementar(){
    setTotal((total) => total + 1)
  }

  return (
      <div>
        <p>Total: {total}</p>
        <Button className="Mariano" tamanho='1.25rem' onClick={incrementar}>Incrementar</Button>
      </div>
  )
}

export default App
