
import { createContext } from "react";
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react";


export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {

    const [dados, isLoading] = useFetch("/dados.json") //<-- minha lista

    const [trilhas, setTrilhas] = useState([dados])

    const [trilhasLista, setNovaTrilha] = useState([])


    function adicionarTrilha(trilha) {

        setTrilhas((t) => [...t, trilha]);
    }

    //************************************************************************ */
    function adicionarTrilhaNaLista(trilha) {
        setNovaTrilha((tl) => [...tl, { ...trilha, id: tl.length + 1 }])
    }



    useEffect(() => {
        if (!!dados && !isLoading) { //<-- poderia ser apenas o !isLoading, o !!dados o prof colocou por precaução
            setTrilhas(dados.trilhas)
        }
    }, [dados])


    return (
        <TrilhasContext.Provider value={{ trilhas, adicionarTrilha, trilhasLista, adicionarTrilhaNaLista }}>
            {children}
        </TrilhasContext.Provider>
    )


}