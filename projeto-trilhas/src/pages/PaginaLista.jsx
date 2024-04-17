import CardTrilha from "../components/CardTrilha"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react";


function PaginaLista() {
    
    
    
    
    
    const [dados, isLoading] = useFetch("/dados.json")
    const [trilhas, setTrilhas] = useState([])
  
    useEffect(() => {
      if (!!dados && !isLoading) {
        setTrilhas(dados.trilhas)
      }
    }, [dados])
  
  
    
    
    
    return (
        <div className="container">
                   
                <h1 className="titulo">Explore Trilhas</h1>

                {Array.isArray(trilhas)
                    && trilhas.map((trilha, index) => (
                        <CardTrilha dadosTrilha={trilha} key={index} />
                    ))
                }
            

        </div>
    )
}
export default PaginaLista