import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

function user(){
  return{
    nome:'Mariano',
    profissao:'Dev'
  }
}

type User = {
  nome: string;
  profissao: string;
}

function App() {
  const [data, setData] = useState<null | User>(null);
  const [number, setNumber] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
      setData(user());
    }, 3000);
  }, []);

  return (
      <div>
        <p>Total: {number}</p>
        <Button incremetar={setNumber}/>
        {data && <p>Nome: {data.nome}</p>}
      </div>
  )
}

export default App
