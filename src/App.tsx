import React, { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";
import UiContextProvider from "./UIContext";
import Header from "./HEader";


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
    <UiContextProvider>
      <Header/>
    </UiContextProvider>
  )
}

export default App
