import React, { PropsWithChildren, createContext, useContext } from "react";
import useFetch from "./useFetch";

interface IUser {
    id: number;
    nome: string;
    idade: number;
    aulas: number;
    cursos: number;
    preferencias: {
      playback: number;
      volume: number;
      qualidade: string;
    };
}

interface IUserContext{
    data: IUser | null;
    loading: boolean;
}

const UserContext = createContext< IUserContext | null>(null);

export function useUser(){
    const context = useContext(UserContext);
    if(context === null) throw new Error("useContext deve estar dentro do provider")
    return context;
}
function UserContextProvider({children}: PropsWithChildren){
    const {data, loading, error} = useFetch<IUser>('https://data.origamid.dev/usuarios/1');

    return <UserContext.Provider value={{data, loading}}>{children}</UserContext.Provider>
}

export default UserContextProvider