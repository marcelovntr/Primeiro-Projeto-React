import CardTrilha from "./components/CardTrilha"
import "./App.css"
import useFetch from "./hooks/useFetch"
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {

  const [dados, isLoading] = useFetch("/dados.json")
  const [trilhas, setTrilhas] = useState([])

useEffect(() => {
  if(!!dados && !isLoading){
    setTrilhas(dados.trilhas)
  }
},[dados])




  return (
    <>

      <Header />
      <div className="container">
        <h1 className="titulo">Explore Trilhas</h1>

        {Array.isArray(trilhas) 
        && trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))
        }
      </div>
      {/* {!!dados && JSON.stringify(dados)} */}
    </>
  )
}

export default App
