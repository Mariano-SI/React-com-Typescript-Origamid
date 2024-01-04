import React, { useEffect, useRef, useState } from "react";

function useFetch<T>(url: URL | RequestInfo, options?: RequestInit){
   const [data, setData] = useState<T | null>(null);
   const [loading, setSetLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const optionsRef = useRef(options);
   optionsRef.current = options;

   useEffect(()=>{

    const controller = new AbortController();
    const {signal} = controller;
    
    async function fetchData(){
        setSetLoading(true);
        setData(null);
        try {
            const response = await fetch(url, {
                signal,
                ...optionsRef.current
            });

            if(!response.ok) throw new Error(`Error: ${response.status}`);

            const responseInjson = await response.json() as T;

            !signal.aborted && setData(responseInjson);
        } catch (error) {
            if(!signal.aborted && error instanceof Error){
                setError(error.message)
            }
        }finally{
            if(!signal.aborted) setSetLoading(false);
        }
    }

    fetchData();

    return () =>{
        controller.abort()
    }

   }, [url])



   return {data, loading, error}

}

export default useFetch;