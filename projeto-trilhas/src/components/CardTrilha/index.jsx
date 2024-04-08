import * as PropTypes from "prop-types" //sempre assim

function CardTrilha({dadosTrilha}){



return(
    <>

    <h1>{dadosTrilha.nomeTrilha}</h1>
    <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
    <img width={200} src={dadosTrilha.urlImagem} alt="imagem da trilha" />

    </>
)


}

CardTrilha.prototypes = {
                            //.shape aceitaria algo inexistente; exact precisa ser... exato. Tbm tudo precisa ser passado, não pode ficar em branco
    dadosTrilha: PropTypes.exact ({   
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        //oneOf é uma forma de "enum"
        tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
    })
        
}

// aqui vão os prop-types
export default CardTrilha;