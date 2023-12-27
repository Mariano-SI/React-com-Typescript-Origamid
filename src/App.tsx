import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function App() {

  function handleClick(){
    console.log('Clickou')
  }

  return (
      <div>
        <Input id="mariano" label="Mariano"/>
      </div>
  )
}

export default App
