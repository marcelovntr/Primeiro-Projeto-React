import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PaginaInicial from "../pages/PaginaInicial";
import PaginaCadastro from "../pages/PaginaCadastro/PaginaCadastro";
import PaginaLista from "../pages/PaginaLista";
import PaginaErro from "../pages/PaginaErro";

const routes = createBrowserRouter([

    {

        path: "/",
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                path: "/",
                element: <PaginaInicial />
            },

            {
                path: "/cadastro-trilha",
                element: <PaginaCadastro />
            },
            {
                path: "/lista",
                element: <PaginaLista />
            }


        ]
    }
    ])

export default routes