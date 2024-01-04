import React, { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";
import UiContextProvider from "./UIContext";
import Header from "./Header";
import Content from "./Content";
import UserContextProvider from "./UserContext";


type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean
}

/*Utilize a API: https://data.origamid.dev/usuarios/1

1 - Crie um UserContext
2 - Use o useFetch dentro do UserContext para esportar data, loading e error
3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx
*/

function App() {

console.log('aaaa')
  

  return (
    <UserContextProvider>
        <Header/>
        <Content/>
    </UserContextProvider>
  )
}

export default App
