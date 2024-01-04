import React, { PropsWithChildren, createContext, useContext, useState } from "react";

interface IUiContext{
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}
const UiContext = createContext<IUiContext | null>(null);


export function useUI(){
    const context = useContext(UiContext);
    if(context === null) throw new Error('useCntext deve estar dentro do provider')
    return context;
}

function UiContextProvider({children}: PropsWithChildren){

    const [dark, setDark] = useState(false)

    return <UiContext.Provider value={{dark, setDark}}>{children}</UiContext.Provider>
}

export default UiContextProvider