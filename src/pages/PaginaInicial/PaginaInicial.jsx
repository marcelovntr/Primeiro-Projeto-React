import styles from "./style.module.css"

function PaginaInicial() {
    return (
        <div className={styles.containerinicial}>


            <h1>Explore trilhas incríveis</h1>

            <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking
                e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas
                exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre
                cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma
                experiência eco-friendly.</p>

            <button>Explorar Trilhas</button>

            <div className={styles.divinferior}>
                <div>
                    <h2>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h2>
                    <button>Cadastrar trilha</button>
                </div>
                <img src="../mato.jpg " alt="imagem trilha floresta" />

            </div>

        </div>
    )
}
export default PaginaInicial