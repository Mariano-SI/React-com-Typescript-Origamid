import React, { ReactNode } from 'react'

type ButtonProps2 = React.PropsWithChildren<{
    tamanho?: string;
    onClick?: ()=> void;
}>

type ButtonProps = React.ComponentProps<'button'> & ButtonProps2;

  
function Button({tamanho, onClick, children, ...props}: ButtonProps ) {
  return (
    <button 
        style={{fontSize: tamanho}} 
        {...props}
    >
        {children}
    </button>
  )
}

export default Button