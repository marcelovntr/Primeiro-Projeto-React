import CardTrilha from "../../components/CardTrilha"
import { TrilhasContext } from "../../context/TrilhasContext"
import { useContext } from "react"
import styles from "./style.module.css";



function PaginaLista() {

    const { trilhas } = useContext(TrilhasContext); //<-- importando o useContext no código propriamente



    return (
        <div className={styles.containerlista}>



            <img src="../public/montanha.png    " alt="imagem de montanha de fundo" />
            <h1>Explore Trilhas</h1>

            {Array.isArray(trilhas)
                && trilhas.map((trilha, index) => (
                    <CardTrilha dadosTrilha={trilha} key={index} />
                ))
            }


        </div>
    )
}
export default PaginaLista