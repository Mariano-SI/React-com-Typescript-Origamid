import React, { useContext } from 'react'
import { useUI } from './UIContext';
import { useUser } from './UserContext';



function Header() {
    const {data} = useUser();
    
    if(!data) return null
  return (
    <header>
        <h1>Nome: {data?.nome}</h1>
    </header>
  )
}

export default Header;