import React, { useContext } from 'react'
import { useUI } from './UIContext';



function Header() {

  const {dark, setDark} = useUI();

  return (
    <header>
        <h1>{dark ? 'dark':'light'}</h1>
        <button onClick={()=>setDark(!dark)}>mudar</button>
    </header>
  )
}

export default Header;