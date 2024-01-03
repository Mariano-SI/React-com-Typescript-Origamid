import React, { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>]{
    const [state, setState] = useState(()=>{
        const local = window.localStorage.getItem(key);
        return local ? local : initialValue;
    });

    useEffect(()=>{
        window.localStorage.setItem(key, state);
    },[state, key, initialValue])

    return [state, setState];
}

export default useLocalStorage;