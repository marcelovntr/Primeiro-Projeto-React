import CardTrilha from "./components/CardTrilha"
import "./App.css"

function App() {




  const listaTrilhas = [
    {

      nomeTrilha: 'Trilha da Costa da Lagoa',
      cidade: 'Florinópolis',
      estado: 'SC',
      duracao: 120,
      trajeto: 4,
      dificuldade: 'iniciante',
      tipo: 'caminhada / trekking',
      nomeUsuario: 'Guilherme André',
      urlImagem: 'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    },

    {

      nomeTrilha: 'Trilha do Gravatá',
      cidade: 'Florinópolis',
      estado: 'SC',
      duracao: 30,
      trajeto: 3,
      dificuldade: 'intermediária',
      tipo: 'caminhada / trekking',
      nomeUsuario: 'Paulo Antunes',
      urlImagem: 'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    }
  ]


  return (
    <div className="container">
      <h1 className="titulo">Explore Trilhas</h1>
      {

        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }
    </div>
  )
}

export default App
