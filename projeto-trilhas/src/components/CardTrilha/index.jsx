import * as PropTypes from "prop-types" //sempre assim

import styles from "./style.module.css"



function CardTrilha({ dadosTrilha }) {

    if (!dadosTrilha) {
        return null; // ou renderizar uma mensagem de erro ou carregamento
    }

    return (
        <div className={styles.cardcontainer}>
            <img className={styles.card_imagem} width={200} src={dadosTrilha.urlImagem} alt="imagem da trilha" />
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <br /><span>{dadosTrilha.trajeto + ' Km '}</span>
            <br /><span>{dadosTrilha.duracao + ' minutos'}</span>
            <br />
            <p>{dadosTrilha.tipo}</p>
            <p>{dadosTrilha.dificuldade}</p>

        </div>
    )


}

CardTrilha.prototypes = {
    //.shape aceitaria algo inexistente; exact precisa ser... exato. Tbm tudo precisa ser passado, não pode ficar em branco
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        //oneOf é uma forma de "enum"
        tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo / motocross', 'carro / offroad']),
        usuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
    })

}


export default CardTrilha;