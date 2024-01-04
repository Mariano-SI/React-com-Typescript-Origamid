import React, { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";


type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean
}

function App() {

  const [id, setId] = useState('P001')
  const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos/');
  const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`)

  return (
      <div className="flex">
        <div>
          {produtos.data && produtos.data.map((prod)=>(
            <button style={{fontSize:'1rem'}} key={prod.id} onClick={()=> setId(prod.id)}>{prod.id}</button>
          ))}
        </div>
        <div>
          {produto.data && (
            <ul>
              <li>{produto.data.id}</li>
              <li>{produto.data.nome}</li>
              <li>{produto.data.preco}</li>
              <li>{produto.data.descricao}</li>
              <li>{produto.data.quantidade}</li>
            </ul>
          )}
        </div>
      </div>
  )
}

export default App
