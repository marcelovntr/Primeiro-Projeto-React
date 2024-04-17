import { createBrowserRouter } from "react-router-dom";

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