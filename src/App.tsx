import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

/*

Interface da API: https://data.origamid.dev/vendas/
<!-- Essa API possui dados de hoje até 90 dias atrás -->

1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
4 - Crie 3 estados reativos em App.tsx: data, inicio, final
5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

*/

type SaleInfo = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: null | number;
  data: string;
}


function App() {

  const [data, setData] = useState<Array<SaleInfo> | null>(null);
  const [inicio, setInicio] = useState<string>('');
  const [final, setFinal] = useState<string>('');

  async function fetchData(initialDate: string, finalDate: string):Promise<Array<SaleInfo>>{
    const response = await fetch(`https://data.origamid.dev/vendas/?inicio=${initialDate}&final=${finalDate}`);
    return response.json();
 
  }

  useEffect(()=>{
    if(inicio && final){
      fetchData(inicio, final).then((response)=>setData(response));
    }
  }, [inicio, final])

  return (
      <div>
        <Input label="Data incial" id="inicio" type="date" value={inicio} onChange={(e)=>setInicio(e.target.value)}/>
        <Input label="Data final" id="fim" type="date" value={final} onChange={(e)=>setFinal(e.target.value)}/>
        <p>Início: {inicio}</p>
        <p>Final: {final}</p>
        <ul>
          {data && data.map(({id, nome, status}) =>(
              <li key={id}> {nome}: {status}</li>
              ))}
        </ul>
      </div>
  )
}

export default App
