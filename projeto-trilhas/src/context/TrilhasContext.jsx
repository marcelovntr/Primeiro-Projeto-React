
import { createContext } from "react";
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {

    const [dados, isLoading] = useFetch("/dados.json")
    const [trilhas, setTrilhas] = useState([])

    useEffect(() => {
        if (!!dados && !isLoading) { //<-- poderia ser apenas o !isLoading, o !!dados o prof colocou por precaução
            setTrilhas(dados.trilhas)
        }
    }, [dados])


return (
    <TrilhasContext.Provider value={{ trilhas, setTrilhas }}>
        {children}
    </TrilhasContext.Provider>
)


}