import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./router/routes";
import { Outlet } from "react-router-dom";
import PaginaLista from "./pages/PaginaLista/PaginaLista";
import { TrilhasContextProvider } from "./context/TrilhasContext"


function App() {

  // useFetch("/dados.json") e useState([]) e useEffect(() => { estavam aqui e foram pra PaginaLista



  return (

    <TrilhasContextProvider>
      <Header />


      <Outlet />

      {/* <Footer /> */}

      {/* container com as trilhas estava aqui antes... foi tranferido para PáginaLista.jsx */}
      {/* {!!dados && JSON.stringify(dados)} */}

      <Footer />
    </TrilhasContextProvider>
  )
}

export default App
